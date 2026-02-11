document.addEventListener('keydown', (e) => {
    // Only trigger on 'f' or 'F', and ignore if user is typing in an input (though there are none currently)
    if (e.key.toLowerCase() === 'f') {
        if (sessionStorage.getItem('gravityEnabled') === 'true') {
            // Reload on second press
            sessionStorage.removeItem('gravityEnabled');
            window.location.reload();
        } else {
            // Enable gravity
            sessionStorage.setItem('gravityEnabled', 'true');
            initGravity();
        }
    }
});

// Mobile Triple Tap Trigger
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    let tapCount = 0;
    let tapTimer = null;

    heroTitle.addEventListener('click', (e) => {
        tapCount++;
        console.log('Tap count:', tapCount);

        if (tapTimer) clearTimeout(tapTimer);

        tapTimer = setTimeout(() => {
            tapCount = 0;
        }, 500); // 500ms window to tap again

        if (tapCount === 3) {
            if (sessionStorage.getItem('gravityEnabled') === 'true') {
                sessionStorage.removeItem('gravityEnabled');
                window.location.reload();
            } else {
                sessionStorage.setItem('gravityEnabled', 'true');
                initGravity();
            }
            tapCount = 0;
        }
    });
}

// Check if we should auto-enable (optional, but for now we stick to toggle behavior as requested: "Al volver a presionar la F se recargue")
// The user request says "Al volver a presionar la F se recargue la página", implying a reset.

function initGravity() {
    console.log('Gravity Initialized');

    // module aliases
    const Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Bodies = Matter.Bodies,
        Composite = Matter.Composite,
        Body = Matter.Body;

    // create an engine
    const engine = Engine.create();

    // Pick elements to fall
    // We need to be careful not to pick containers AND their children, or things get weird.
    // We'll pick "leaf" visual elements or significant containers.
    const selectors = [
        '.logo',
        '.main-nav a',
        '.hero-title',
        '.hero-desc',
        '.hero-cta',
        '.section-title',
        '.section-header p',
        '.card',
        '.about-text',
        '.contact-link',
        '.social-links a',
        '.copyright'
    ];

    const elements = document.querySelectorAll(selectors.join(','));
    const bodies = [];

    // Disable scrolling
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';

    // Add boundaries (Floor, Walls)
    const width = window.innerWidth;
    const height = window.innerHeight;
    const wallThickness = 100;

    const ground = Bodies.rectangle(width / 2, height + wallThickness / 2 - 10, width, wallThickness, { isStatic: true });
    const leftWall = Bodies.rectangle(0 - wallThickness / 2, height / 2, wallThickness, height * 5, { isStatic: true });
    const rightWall = Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height * 5, { isStatic: true });

    Composite.add(engine.world, [ground, leftWall, rightWall]);

    // Process elements
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();

        // Skip if hidden or off-screen
        if (rect.width === 0 || rect.height === 0) return;

        // Matter.js bodies are positioned at their center of mass
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;

        const body = Bodies.rectangle(x, y, rect.width, rect.height, {
            restitution: 0.8, // Bounciness
            friction: 0.1,
            frictionAir: 0.01
        });

        // Store reference to DOM element
        body.domElement = el;

        // Set initial velocity slightly random to make it interesting
        Body.setVelocity(body, {
            x: (Math.random() - 0.5) * 5,
            y: (Math.random() - 0.5) * 5
        });

        // Add randomness to rotation
        Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.1);

        bodies.push(body);
    });

    Composite.add(engine.world, bodies);

    // Switch elements to absolute positioning to follow physics
    bodies.forEach(body => {
        const el = body.domElement;
        el.style.position = 'fixed'; // Use fixed to be relative to viewport
        el.style.left = '0';
        el.style.top = '0';
        el.style.margin = '0';
        el.style.transformOrigin = 'center center';
        el.style.width = `${body.bounds.max.x - body.bounds.min.x}px`;
        el.style.height = `${body.bounds.max.y - body.bounds.min.y}px`;
        // Remove transitions/animations to make movement instant/smooth with physics and prevent style conflicts
        el.style.transition = 'none';
        el.style.animation = 'none';
        el.style.opacity = '1'; // Ensure visibility since some elements start at opacity: 0
        el.style.zIndex = '1000'; // Bring to front
    });

    // create runner
    const runner = Runner.create();
    Runner.run(runner, engine);

    // Sync loop
    (function render() {
        bodies.forEach(body => {
            const el = body.domElement;
            const x = body.position.x - (body.bounds.max.x - body.bounds.min.x) / 2;
            const y = body.position.y - (body.bounds.max.y - body.bounds.min.y) / 2;
            const angle = body.angle;

            el.style.transform = `translate(${body.position.x - el.offsetWidth / 2}px, ${body.position.y - el.offsetHeight / 2}px) rotate(${angle}rad)`;
        });
        requestAnimationFrame(render);
    })();
}
