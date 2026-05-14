        // Data Mapping (NTSC + PAL extended frame rates)
        const cameraData = {
            "ARRI Alexa 35": {
                "ARRIRAW": {
                    "4.6K": { "23.98p": 1198, "24p": 1200, "25p": 1250, "29.97p": 1498, "30p": 1500, "50p": 2500, "59.94p": 2997, "60p": 3000 }
                },
                "Apple ProRes 4444": {
                    "4K": { "23.98p": 510, "24p": 511, "25p": 532, "29.97p": 638, "30p": 638, "50p": 1064, "59.94p": 1276, "60p": 1277 }
                }
            },
            "RED V-Raptor": {
                "REDCODE RAW MQ": {
                    "8K": { "23.98p": 1079, "24p": 1080, "25p": 1125, "29.97p": 1348, "30p": 1350, "50p": 2250, "59.94p": 2697, "60p": 2700 }
                },
                "REDCODE RAW LQ": {
                    "8K": { "23.98p": 539, "24p": 540, "25p": 562, "29.97p": 674, "30p": 675, "50p": 1125, "59.94p": 1348, "60p": 1350 }
                }
            },
            "Sony VENICE 2": {
                "X-OCN XT": {
                    "8K": { "23.98p": 1079, "24p": 1080, "25p": 1125, "29.97p": 1348, "30p": 1350, "50p": 2250, "59.94p": 2697, "60p": 2700 }
                },
                "Apple ProRes 4444": {
                    "4K": { "23.98p": 510, "24p": 511, "25p": 532, "29.97p": 638, "30p": 638, "50p": 1064, "59.94p": 1276, "60p": 1277 }
                }
            },
            "Sony FX6": {
                "XAVC S-I (All-I)": {
                    "4K": { "23.98p": 108, "24p": 108, "25p": 112, "29.97p": 135, "30p": 135, "50p": 225, "59.94p": 270, "60p": 270, "100p": 450, "119.88p": 540, "120p": 540 },
                    "FHD": { "23.98p": 40, "24p": 40, "25p": 45, "29.97p": 50, "30p": 50, "50p": 90, "59.94p": 100, "60p": 100 }
                },
                "XAVC-L (Long GOP)": {
                    "4K": { "23.98p": 45, "25p": 45, "50p": 67, "59.94p": 67 },
                    "FHD": { "23.98p": 22, "25p": 22, "50p": 45, "59.94p": 45 }
                }
            },
            "Sony FX3": {
                "XAVC S-I (All-I)": {
                    "4K": { "23.98p": 108, "24p": 108, "25p": 112, "29.97p": 135, "30p": 135, "50p": 225, "59.94p": 270, "60p": 270, "100p": 450, "119.88p": 540, "120p": 540 },
                    "FHD": { "23.98p": 40, "24p": 40, "25p": 45, "29.97p": 50, "30p": 50, "50p": 90, "59.94p": 100, "60p": 100, "100p": 190, "119.88p": 200, "120p": 200 }
                },
                "XAVC HS (H.265)": {
                    "4K": { "23.98p": 45, "24p": 45, "25p": 45, "50p": 90, "59.94p": 90, "60p": 90, "100p": 126, "119.88p": 126, "120p": 126 }
                },
                "XAVC S (H.264)": {
                    "4K": { "23.98p": 45, "24p": 45, "25p": 45, "29.97p": 45, "30p": 45, "50p": 67, "59.94p": 67, "60p": 67, "100p": 126, "119.88p": 126, "120p": 126 },
                    "FHD": { "23.98p": 22, "24p": 22, "25p": 22, "29.97p": 22, "30p": 22, "50p": 22, "59.94p": 22, "60p": 22, "100p": 45, "119.88p": 45, "120p": 45 }
                }
            },
            "Sony FX30": {
                "XAVC S-I (All-I)": {
                    "4K": { "23.98p": 108, "24p": 108, "25p": 112, "29.97p": 135, "30p": 135, "50p": 225, "59.94p": 270, "60p": 270, "100p": 450, "119.88p": 540, "120p": 540 },
                    "FHD": { "23.98p": 40, "24p": 40, "25p": 45, "29.97p": 50, "30p": 50, "50p": 90, "59.94p": 100, "60p": 100, "100p": 190, "119.88p": 200, "120p": 200 }
                },
                "XAVC HS (H.265)": {
                    "4K": { "23.98p": 45, "24p": 45, "25p": 45, "50p": 90, "59.94p": 90, "60p": 90, "100p": 126, "119.88p": 126, "120p": 126 }
                },
                "XAVC S (H.264)": {
                    "4K": { "23.98p": 45, "24p": 45, "25p": 45, "29.97p": 45, "30p": 45, "50p": 67, "59.94p": 67, "60p": 67, "100p": 126, "119.88p": 126, "120p": 126 },
                    "FHD": { "23.98p": 22, "24p": 22, "25p": 22, "29.97p": 22, "30p": 22, "50p": 22, "59.94p": 22, "60p": 22, "100p": 45, "119.88p": 45, "120p": 45 }
                }
            },
            "Sony FX2": {
                "XAVC S-I (All-I)": {
                    "4K": { "23.98p": 108, "25p": 112, "50p": 225, "59.94p": 270 },
                    "FHD": { "23.98p": 40, "25p": 45, "50p": 90, "59.94p": 100 }
                },
                "XAVC HS (H.265)": { "4K": { "23.98p": 45, "25p": 45, "50p": 90, "59.94p": 90 } },
                "XAVC S (H.264)": {
                    "4K": { "23.98p": 45, "25p": 45, "50p": 67, "59.94p": 67 },
                    "FHD": { "23.98p": 22, "25p": 22, "50p": 22, "59.94p": 22 }
                }
            },
            "Sony A7IV": {
                "XAVC S-I (All-I)": {
                    "4K": { "23.98p": 108, "24p": 108, "25p": 112, "29.97p": 135, "30p": 135, "50p": 225, "59.94p": 270, "60p": 270 },
                    "FHD": { "23.98p": 40, "24p": 40, "25p": 45, "29.97p": 50, "30p": 50, "50p": 90, "59.94p": 100, "60p": 100 }
                },
                "XAVC HS (H.265)": {
                    "4K": { "23.98p": 45, "24p": 45, "25p": 45, "50p": 90, "59.94p": 90, "60p": 90 }
                },
                "XAVC S (H.264)": {
                    "4K": { "23.98p": 45, "24p": 45, "25p": 45, "29.97p": 45, "30p": 45, "50p": 67, "59.94p": 67, "60p": 67 },
                    "FHD": { "23.98p": 22, "24p": 22, "25p": 22, "29.97p": 22, "30p": 22, "50p": 22, "59.94p": 22, "60p": 22, "100p": 45, "119.88p": 45, "120p": 45 }
                }
            },
            "Sony A7CII": {
                "XAVC S-I (All-I)": {
                    "4K": { "23.98p": 108, "24p": 108, "25p": 112, "29.97p": 135, "30p": 135, "50p": 225, "59.94p": 270, "60p": 270 },
                    "FHD": { "23.98p": 40, "24p": 40, "25p": 45, "29.97p": 50, "30p": 50, "50p": 90, "59.94p": 100, "60p": 100 }
                },
                "XAVC HS (H.265)": {
                    "4K": { "23.98p": 45, "24p": 45, "25p": 45, "50p": 90, "59.94p": 90, "60p": 90 }
                },
                "XAVC S (H.264)": {
                    "4K": { "23.98p": 45, "24p": 45, "25p": 45, "29.97p": 45, "30p": 45, "50p": 67, "59.94p": 67, "60p": 67 },
                    "FHD": { "23.98p": 22, "24p": 22, "25p": 22, "29.97p": 22, "30p": 22, "50p": 22, "59.94p": 22, "60p": 22, "100p": 45, "119.88p": 45, "120p": 45 }
                }
            },
            "Sony A7V": {
                "XAVC S-I (All-I)": {
                    "8K": { "23.98p": 180, "24p": 180, "25p": 185, "29.97p": 220, "30p": 220 },
                    "4K": { "23.98p": 108, "24p": 108, "25p": 112, "29.97p": 135, "30p": 135, "50p": 225, "59.94p": 270, "60p": 270, "100p": 450, "119.88p": 540, "120p": 540 },
                    "FHD": { "23.98p": 40, "24p": 40, "25p": 45, "29.97p": 50, "30p": 50, "50p": 90, "59.94p": 100, "60p": 100, "100p": 190, "119.88p": 200, "120p": 200 }
                },
                "XAVC HS (H.265)": {
                    "8K": { "23.98p": 180, "24p": 180, "25p": 180 },
                    "4K": { "23.98p": 45, "24p": 45, "25p": 45, "50p": 90, "59.94p": 90, "60p": 90, "100p": 126, "119.88p": 126, "120p": 126 }
                },
                "XAVC S (H.264)": {
                    "4K": { "23.98p": 45, "24p": 45, "25p": 45, "29.97p": 45, "30p": 45, "50p": 67, "59.94p": 67, "60p": 67, "100p": 126, "119.88p": 126, "120p": 126 },
                    "FHD": { "23.98p": 22, "24p": 22, "25p": 22, "29.97p": 22, "30p": 22, "50p": 22, "59.94p": 22, "60p": 22, "100p": 45, "119.88p": 45, "120p": 45 }
                }
            }
        };

        const DISK_SIZES = [
            { label: "256GB", gb: 256 },
            { label: "512GB", gb: 512 },
            { label: "1TB", gb: 1024 },
            { label: "2TB", gb: 2048 },
            { label: "4TB", gb: 4096 },
            { label: "8TB", gb: 8192 }
        ];

        // Core Calculator Elements
        const camerasContainer = document.getElementById('cameras-container');
        const btnAddCamera = document.getElementById('btn-add-camera');
        
        const hoursSlider = document.getElementById('hours-slider');
        const hoursDisplay = document.getElementById('hours-display');
        const tbDisplay = document.getElementById('tb-display');
        const progressFill = document.getElementById('progress-fill');
        const targetDriveLabel = document.getElementById('target-drive-label');
        const maxDriveLabel = document.getElementById('max-drive-label');

        // DIT Logistics Elements
        const sourceMediaSelect = document.getElementById('source-media-select');
        const targetDriveSelect = document.getElementById('target-drive-select');
        const offloadTimeDisplay = document.getElementById('offload-time-display');

        // Backup Strategy Elements
        const backupStrategySelect = document.getElementById('backup-strategy-select');
        const customMultiplierContainer = document.getElementById('custom-multiplier-container');
        const backupCustomMultiplier = document.getElementById('backup-custom-multiplier');
        const backupSafetyMargin = document.getElementById('backup-safety-margin');
        const backupMarginDisplay = document.getElementById('backup-margin-display');
        const backupSummaryOriginal = document.getElementById('backup-summary-original');
        const backupSummaryMultiplier = document.getElementById('backup-summary-multiplier');
        const backupWarningContainer = document.getElementById('backup-warning-container');

        // Global State
        let productionSetup = [];
        let nextCameraId = 1;
        let globalTotalGB = 0;
        let globalProtectedGB = 0;
        let globalBackupMultiplier = 1;
        let globalSafetyMargin = 0;
        let globalOffloadTimeSeconds = 0;
        let globalPercentFill = 0;
        let globalRecommendedDrive = "";
        let producerModeReady = false;

        function updateCameraLabels() {
            const blocks = camerasContainer.querySelectorAll('.camera-block');
            blocks.forEach((block, index) => {
                const header = block.querySelector('.cam-header');
                if (header) {
                    header.innerHTML = `<img class="calc-icon calc-icon-glow" src="IMG_assets/Icono%20Camara.png" alt=""> Cam ${index + 1} Config`;
                }
            });
        }

        function createCameraBlock(id) {
            const block = document.createElement('div');
            block.className = "bg-white p-6 neo-border neo-shadow relative camera-block flex flex-col justify-between";
            block.dataset.id = id;

            let headerHTML = `<h2 class="cam-header text-xl font-display font-bold mb-4 flex items-center gap-2 text-white border-b border-white/10 pb-3"><img class="calc-icon calc-icon-glow" src="IMG_assets/Icono%20Camara.png" alt=""> Cam ${id} Config</h2>`;
            if (id > 1) {
                headerHTML += `<button class="btn-remove-cam liquid-btn liquid-btn-danger absolute top-4 right-4 w-8 h-8 flex items-center justify-center p-0 rounded-full !min-w-0 !min-h-0"><span class="material-symbols-outlined text-sm m-0 p-0 leading-none">delete</span></button>`;
            }

            block.innerHTML = `
                ${headerHTML}
                <div class="space-y-4 flex-grow">
                    <div>
                        <label class="block text-[10px] font-bold mb-1 uppercase tracking-widest text-primary/70">Camera System</label>
                        <select class="cam-select neo-input appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20stroke%3D%22white%22%20fill%3D%22white%22%20d%3D%22M7%2010l5%205%205-5z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-1rem)_center]">
                            <option value="" disabled selected>Select Camera...</option>
                            ${Object.keys(cameraData).map(c => `<option value="${c}">${c}</option>`).join('')}
                        </select>
                    </div>
                    <div>
                        <label class="block text-[10px] font-bold mb-1 uppercase tracking-widest text-primary/70">Codec</label>
                        <select class="codec-select neo-input appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20stroke%3D%22white%22%20fill%3D%22white%22%20d%3D%22M7%2010l5%205%205-5z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-1rem)_center]" disabled>
                            <option value="" disabled selected>Select Codec...</option>
                        </select>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-[10px] font-bold mb-1 uppercase tracking-widest text-primary/70">Resolution</label>
                            <select class="res-select neo-input appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20stroke%3D%22white%22%20fill%3D%22white%22%20d%3D%22M7%2010l5%205%205-5z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-1rem)_center]" disabled>
                                <option value="" disabled selected>Res</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-[10px] font-bold mb-1 uppercase tracking-widest text-primary/70">FPS</label>
                            <select class="fps-select neo-input appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20stroke%3D%22white%22%20fill%3D%22white%22%20d%3D%22M7%2010l5%205%205-5z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-1rem)_center]" disabled>
                                <option value="" disabled selected>FPS</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="mt-6 pt-4 border-t border-white/10 flex justify-between items-center">
                    <span class="font-bold text-[10px] uppercase text-white/50 tracking-widest">Selected Bitrate</span>
                    <span class="bitrate-display font-display font-bold text-xl text-[#00E5FF] drop-shadow-[0_0_8px_rgba(0,229,255,0.4)]">0 GB/hr</span>
                </div>
            `;
            return block;
        }

        function setupCameraListeners(block, id) {
            const camSelect = block.querySelector('.cam-select');
            const codecSelect = block.querySelector('.codec-select');
            const resSelect = block.querySelector('.res-select');
            const fpsSelect = block.querySelector('.fps-select');
            const bitrateDisplay = block.querySelector('.bitrate-display');
            const removeBtn = block.querySelector('.btn-remove-cam');

            let currentCamCodecs = null;
            let currentResolutions = null;
            let currentFps = null;

            camSelect.addEventListener('change', (e) => {
                const camName = e.target.value;
                currentCamCodecs = cameraData[camName];

                codecSelect.innerHTML = '<option value="" disabled selected>Select Codec...</option>';
                resSelect.innerHTML = '<option value="" disabled selected>Res</option>';
                fpsSelect.innerHTML = '<option value="" disabled selected>FPS</option>';
                resSelect.disabled = true;
                fpsSelect.disabled = true;

                if (currentCamCodecs) {
                    codecSelect.disabled = false;
                    Object.keys(currentCamCodecs).forEach(codec => {
                        const opt = document.createElement('option');
                        opt.value = codec;
                        opt.textContent = codec;
                        codecSelect.appendChild(opt);
                    });
                    codecSelect.selectedIndex = 1;
                    codecSelect.dispatchEvent(new Event('change'));
                }
            });

            codecSelect.addEventListener('change', (e) => {
                currentResolutions = currentCamCodecs[e.target.value];
                resSelect.innerHTML = '<option value="" disabled selected>Res</option>';
                fpsSelect.innerHTML = '<option value="" disabled selected>FPS</option>';
                fpsSelect.disabled = true;

                if (currentResolutions) {
                    resSelect.disabled = false;
                    Object.keys(currentResolutions).forEach(res => {
                        const opt = document.createElement('option');
                        opt.value = res;
                        opt.textContent = res;
                        resSelect.appendChild(opt);
                    });
                    resSelect.selectedIndex = 1;
                    resSelect.dispatchEvent(new Event('change'));
                }
            });

            resSelect.addEventListener('change', (e) => {
                currentFps = currentResolutions[e.target.value];
                fpsSelect.innerHTML = '<option value="" disabled selected>FPS</option>';

                if (currentFps) {
                    fpsSelect.disabled = false;
                    Object.keys(currentFps).forEach(fps => {
                        const opt = document.createElement('option');
                        opt.value = currentFps[fps];
                        opt.textContent = fps;
                        fpsSelect.appendChild(opt);
                    });
                    fpsSelect.selectedIndex = 1;
                    fpsSelect.dispatchEvent(new Event('change'));
                }
            });

            fpsSelect.addEventListener('change', (e) => {
                const gbHr = parseInt(e.target.value);
                bitrateDisplay.textContent = gbHr + " GB/hr";
                
                const camObj = productionSetup.find(c => c.id === id);
                if (camObj) {
                    camObj.gbPerHour = gbHr;
                    calculateStorage();
                }
            });

            if (removeBtn) {
                removeBtn.addEventListener('click', () => {
                    block.remove();
                    productionSetup = productionSetup.filter(c => c.id !== id);
                    calculateStorage();
                    updateCameraLabels();
                });
            }
        }

        function addCamera() {
            const id = nextCameraId++;
            productionSetup.push({ id, gbPerHour: 0 });
            
            const block = createCameraBlock(id);
            camerasContainer.insertBefore(block, btnAddCamera);
            setupCameraListeners(block, id);
            
            // Auto setup defaults on first cam specifically if needed
            if (id === 1) {
                const camSelect = block.querySelector('.cam-select');
                camSelect.value = "Sony FX6";
                camSelect.dispatchEvent(new Event('change'));
            } else {
                const prevCam = block.previousElementSibling;
                if (prevCam) {
                    const camSelect = block.querySelector('.cam-select');
                    camSelect.value = prevCam.querySelector('.cam-select').value;
                    camSelect.dispatchEvent(new Event('change'));
                }
            }
            
            updateCameraLabels();
        }

        btnAddCamera.addEventListener('click', () => {
            addCamera();
        });

        // Inputs
        hoursSlider.addEventListener('input', (e) => {
            hoursDisplay.textContent = e.target.value;
            calculateStorage();
        });

        sourceMediaSelect.addEventListener('change', calculateStorage);
        targetDriveSelect.addEventListener('change', calculateStorage);

        // Backup event listeners
        backupStrategySelect.addEventListener('change', calculateStorage);
        backupCustomMultiplier.addEventListener('input', calculateStorage);
        backupSafetyMargin.addEventListener('input', calculateStorage);

        // Dynamic Disk Recommendation Algorithm
        function recommendDrives(totalGB) {
            if (totalGB <= 0) return { text: "1x 256GB", maxGB: 256 };

            // Request logic: "uno mas grande para estar olgado" - 15% safety margin minimum
            let safeGB = totalGB * 1.15;
            let remaining = safeGB;
            let drives = [];
            let combinedMaxGB = 0;

            while (remaining > 0) {
                if (remaining > 8192) {
                    drives.push("8TB");
                    remaining -= 8192;
                    combinedMaxGB += 8192;
                } else {
                    let fitted = DISK_SIZES.find(d => d.gb >= remaining);
                    if (!fitted) fitted = DISK_SIZES[5]; // fallback 8tb
                    drives.push(fitted.label);
                    remaining -= fitted.gb;
                    combinedMaxGB += fitted.gb;
                }
            }

            const counts = {};
            drives.forEach(d => counts[d] = (counts[d] || 0) + 1);
            const textArr = Object.keys(counts).map(k => `${counts[k]}x ${k}`);

            return {
                text: textArr.join(" + "),
                maxGB: combinedMaxGB
            };
        }

        function calculateOffloadTime(totalGB) {
            if (totalGB <= 0) {
                offloadTimeDisplay.textContent = "00h 00m 00s";
                return;
            }

            const sourceSpeed = parseInt(sourceMediaSelect.value);
            const targetSpeed = parseInt(targetDriveSelect.value);
            const bottleneck = Math.min(sourceSpeed, targetSpeed); // MB/s

            const totalMB = totalGB * 1024;
            const totalSeconds = totalMB / bottleneck;
            globalOffloadTimeSeconds = totalSeconds;

            const hours = Math.floor(totalSeconds / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = Math.floor(totalSeconds % 60);

            const hh = hours.toString().padStart(2, '0');
            const mm = minutes.toString().padStart(2, '0');
            const ss = seconds.toString().padStart(2, '0');

            offloadTimeDisplay.textContent = `${hh}h ${mm}m ${ss}s`;
        }

        // Backup Strategy Logic
        // Purpose: Add a rule-based layer to calculate protected storage footprint.
        // Formula: Protected Storage = Original Media x Multiplier x (1 + Margin)
        function getBackupMultiplier() {
            const strategy = backupStrategySelect.value;
            if (strategy === 'no_backup') return 1;
            if (strategy === '1_copy') return 2;
            if (strategy === '2_copies' || strategy === '3_2_1') return 3;
            if (strategy === 'custom') return parseFloat(backupCustomMultiplier.value) || 1;
            return 1;
        }

        function updateBackupStrategyUI(margin) {
            const strategy = backupStrategySelect.value;
            
            // Toggle custom multiplier input
            if (strategy === 'custom') {
                customMultiplierContainer.classList.remove('hidden');
            } else {
                customMultiplierContainer.classList.add('hidden');
            }

            // Warnings
            backupWarningContainer.className = 'mt-4 p-3 neo-border text-sm font-bold'; // reset
            if (strategy === 'no_backup') {
                backupWarningContainer.classList.add('bg-red-100', 'text-red-800', 'border-red-500');
                backupWarningContainer.innerHTML = '⚠ Risky workflow: no backup copies planned.';
            } else if (strategy === '3_2_1') {
                backupWarningContainer.classList.add('bg-green-100', 'text-green-800', 'border-green-500');
                backupWarningContainer.innerHTML = '✓ Recommended for professional productions: 3 copies, 2 media types, 1 offsite copy.';
            } else if (margin < 10) {
                backupWarningContainer.classList.add('bg-yellow-100', 'text-yellow-800', 'border-yellow-500');
                backupWarningContainer.innerHTML = '⚠ Low margin: unexpected extra takes or overtime may exceed available storage.';
            } else {
                backupWarningContainer.classList.add('bg-surface', 'text-primary/70', 'border-primary/20');
                backupWarningContainer.innerHTML = 'ℹ Standard protection margin applied.';
            }
        }

        // Real-time Calculation updates
        function calculateStorage() {
            const hours = parseInt(hoursSlider.value);
            
            // Total GB aggregate logic
            const totalGBPerHour = productionSetup.reduce((acc, cam) => acc + (cam.gbPerHour || 0), 0);
            const totalGB = totalGBPerHour * hours;
            
            // Apply Backup Strategy Formula
            const multiplier = getBackupMultiplier();
            const safetyMargin = parseInt(backupSafetyMargin.value) || 0;
            const protectedGB = totalGB * multiplier * (1 + safetyMargin / 100);
            const protectedTB = protectedGB / 1024;
            
            globalTotalGB = totalGB;
            globalProtectedGB = protectedGB;
            globalBackupMultiplier = multiplier;
            globalSafetyMargin = safetyMargin;

            // Update Backup UI Summary
            backupMarginDisplay.textContent = safetyMargin + '%';
            backupSummaryOriginal.textContent = (totalGB >= 1024 ? (totalGB / 1024).toFixed(2) + ' TB' : totalGB.toFixed(2) + ' GB');
            backupSummaryMultiplier.textContent = multiplier.toFixed(1) + 'x';
            updateBackupStrategyUI(safetyMargin);

            // Text Math View -> Dynamic display dependent on size
            if (protectedGB < 1024) {
                tbDisplay.innerHTML = `${Math.round(protectedGB)} <span class="text-2xl font-bold">GB</span>`;
            } else {
                tbDisplay.innerHTML = `${protectedTB.toFixed(2)} <span class="text-2xl font-bold">TB</span>`;
            }

            // Disk System Logic
            const rec = recommendDrives(protectedGB);
            globalRecommendedDrive = rec.text;
            targetDriveLabel.textContent = rec.text;
            maxDriveLabel.textContent = `${rec.maxGB >= 1024 ? (rec.maxGB / 1024) + 'TB' : rec.maxGB + 'GB'} (CAPACITY)`;

            // Bar Progress
            let percentFill = (protectedGB / rec.maxGB) * 100;
            if (isNaN(percentFill)) percentFill = 0;
            if (percentFill > 100) percentFill = 100;
            globalPercentFill = percentFill;
            
            progressFill.style.width = `${percentFill}%`;
            progressFill.parentElement.setAttribute('aria-valuenow', Math.round(percentFill));

            // Aesthetics Warning Rules
            let activeColorHex = '#00E5FF'; // Cyan
            let shadowGlow = 'rgba(0, 229, 255, 0.5)';
            tbDisplay.style.color = ''; // Default
            tbDisplay.style.textShadow = '';

            if (percentFill > 65 && percentFill <= 85) {
                activeColorHex = '#ffc832'; // Yellow
                shadowGlow = 'rgba(255, 200, 50, 0.5)';
            } else if (percentFill > 85) {
                activeColorHex = '#ff4444'; // Red
                shadowGlow = 'rgba(255, 68, 68, 0.5)';
                tbDisplay.style.color = '#ff4444';
                tbDisplay.style.textShadow = '0 0 12px rgba(255, 68, 68, 0.4)';
            }

            progressFill.style.backgroundColor = activeColorHex;
            progressFill.style.boxShadow = `0 0 10px ${shadowGlow}`;

            // Trigger Offload Time update (Based on 1x totalGB because offloading is single card to single drive)
            calculateOffloadTime(totalGB);
            
            if (producerModeReady && typeof updateProducerMode === 'function') updateProducerMode();
        }

        // SPA Navigation Tabs
        const navButtons = document.querySelectorAll('.nav-btn');
        const viewPanels = document.querySelectorAll('.view-section');
        const mainNavigation = document.querySelector('nav[aria-label="Main navigation"]');
        const bottomNavButtons = mainNavigation ? mainNavigation.querySelectorAll('.nav-btn') : [];
        const centerHomeLogo = document.querySelector('.center-orb');
        const homeVersionBadge = document.querySelector('.home-version-badge');
        const homeFooterIdentity = document.querySelector('.home-footer-identity');
        const homeKeysAudio = document.getElementById('home-keys-audio');

        function setActivePanel(activeId, previousId = null) {
            viewPanels.forEach(p => {
                p.classList.add('hidden');
                p.classList.remove('block');
                p.classList.remove('view-enter-home', 'view-enter-tool');
            });

            const activePanel = document.getElementById(activeId);
            if (!activePanel) return;

            activePanel.classList.remove('hidden');
            activePanel.classList.add('block');

            const isHome = activeId === 'view-home';
            const cameFromHome = previousId === 'view-home';
            document.body.classList.toggle('is-home-view', isHome);
            document.body.classList.toggle('is-tool-view', !isHome);
            document.body.classList.toggle('is-leaving-home', cameFromHome && !isHome);

            void activePanel.offsetWidth;
            activePanel.classList.add(isHome ? 'view-enter-home' : 'view-enter-tool');
        }

        function updateBottomNav(activeId) {
            const isHome = activeId === 'view-home';

            if (mainNavigation) {
                mainNavigation.classList.toggle('nav-home-hidden', isHome);
                mainNavigation.setAttribute('aria-hidden', isHome ? 'true' : 'false');
            }

            bottomNavButtons.forEach(b => {
                const isActive = b.getAttribute('data-target') === activeId;
                b.classList.toggle('bg-primary-container', isActive);
                b.classList.toggle('font-bold', isActive);
                b.classList.toggle('neo-shadow', isActive);
                b.classList.toggle('hover:bg-surface', !isActive);
                b.classList.toggle('text-primary/70', !isActive);
                b.classList.toggle('border-transparent', true);
                b.classList.remove('border-primary');
            });
        }

        function showView(activeId) {
            const activePanel = document.getElementById(activeId);
            if (!activePanel) return;

            const currentPanel = Array.from(viewPanels).find(p => p.classList.contains('block'));
            const previousId = currentPanel ? currentPanel.id : null;

            updateBottomNav(activeId);
            setActivePanel(activeId, previousId);
        }

        navButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                showView(btn.getAttribute('data-target'));
            });
        });

        updateBottomNav('view-home');
        document.body.classList.add('is-home-view');

        if (centerHomeLogo) {
            const logoTapEffectMs = 2400;

            centerHomeLogo.addEventListener('pointerdown', () => {
                centerHomeLogo.classList.remove('is-tapped');
                void centerHomeLogo.offsetWidth;
                centerHomeLogo.classList.add('is-tapped');
                window.setTimeout(() => {
                    centerHomeLogo.classList.remove('is-tapped');
                }, logoTapEffectMs);
            });
        }

        if (homeVersionBadge) {
            const versionTapEffectMs = 2400;

            homeVersionBadge.addEventListener('pointerdown', () => {
                homeVersionBadge.classList.remove('is-tapped');
                void homeVersionBadge.offsetWidth;
                homeVersionBadge.classList.add('is-tapped');
                window.setTimeout(() => {
                    homeVersionBadge.classList.remove('is-tapped');
                }, versionTapEffectMs);
            });
        }

        if (homeFooterIdentity && homeKeysAudio) {
            const footerTapEffectMs = 1800;
            let footerTapTimer = null;
            const stopFooterAudioGlow = () => {
                homeFooterIdentity.classList.remove('is-playing');
            };

            homeKeysAudio.addEventListener('play', () => {
                homeFooterIdentity.classList.add('is-playing');
            });
            homeKeysAudio.addEventListener('pause', stopFooterAudioGlow);
            homeKeysAudio.addEventListener('ended', stopFooterAudioGlow);

            homeFooterIdentity.addEventListener('click', () => {
                homeFooterIdentity.classList.remove('is-tapped');
                void homeFooterIdentity.offsetWidth;
                homeFooterIdentity.classList.add('is-tapped');

                if (footerTapTimer) window.clearTimeout(footerTapTimer);
                footerTapTimer = window.setTimeout(() => {
                    homeFooterIdentity.classList.remove('is-tapped');
                }, footerTapEffectMs);

                homeKeysAudio.currentTime = 0;
                homeKeysAudio.play().catch(stopFooterAudioGlow);
            });
        }

        // Structure Gen Engine
        let currentGeneratedPaths = [];
        let currentProjectName = "";

        function generateStructurePaths() {
            const projectInput = document.getElementById('project-name').value || 'Project_1';
            const dayInput = document.getElementById('shooting-day').value || 'Day_01';
            const camCount = parseInt(document.getElementById('camera-count').value);
            const includeSound = document.getElementById('include-sound').checked;
            const includeProxies = document.getElementById('include-proxies').checked;
            const includeAssets = document.getElementById('include-assets').checked;
            const includeReports = document.getElementById('include-reports').checked;
            const includeDocs = document.getElementById('include-docs').checked;
            const nlePremiere = document.getElementById('nle-premiere').checked;
            const nleResolve = document.getElementById('nle-resolve').checked;
            const nleFcpx = document.getElementById('nle-fcpx').checked;
            const includeColor = document.getElementById('include-color').checked;

            currentProjectName = projectInput;
            const paths = [];
            const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

            // 00 Docs
            if (includeDocs) {
                paths.push(`${projectInput}/00_Production_Docs`);
            }

            // 01 Original Media
            for (let i = 0; i < camCount; i++) {
                paths.push(`${projectInput}/01_Original_Media/${dayInput}/Cam_${alphabet[i]}`);
            }
            if (includeSound) {
                paths.push(`${projectInput}/01_Original_Media/${dayInput}/Sound`);
            }
            if (includeReports) {
                paths.push(`${projectInput}/01_Original_Media/${dayInput}/Reports`);
            }

            // 02 Proxies
            if (includeProxies) {
                paths.push(`${projectInput}/02_Proxies/${dayInput}`);
            }

            // 03 Projects
            if (nlePremiere) paths.push(`${projectInput}/03_Projects/Premiere`);
            if (nleResolve) paths.push(`${projectInput}/03_Projects/Resolve`);
            if (nleFcpx) paths.push(`${projectInput}/03_Projects/Final Cut Pro`);
            if (includeColor) paths.push(`${projectInput}/03_Projects/LUTs_and_Color`);

            // 04 Assets & 05 Exports
            if (includeAssets) {
                paths.push(`${projectInput}/04_Assets_GFX`);
                paths.push(`${projectInput}/05_Exports`);
            } else {
                paths.push(`${projectInput}/04_Exports`);
            }

            return paths;
        }

        // Keep the old visual tree generator for the UI display, 
        // as the nested drawing logic with lines is specific to text UI.
        document.getElementById('btn-generate').addEventListener('click', () => {
            const projectInput = document.getElementById('project-name').value || 'Project_1';
            const dayInput = document.getElementById('shooting-day').value || 'Day_01';
            const camCount = parseInt(document.getElementById('camera-count').value);
            const includeSound = document.getElementById('include-sound').checked;
            const includeProxies = document.getElementById('include-proxies').checked;
            const includeAssets = document.getElementById('include-assets').checked;
            const includeReports = document.getElementById('include-reports').checked;
            const includeDocs = document.getElementById('include-docs').checked;
            const nlePremiere = document.getElementById('nle-premiere').checked;
            const nleResolve = document.getElementById('nle-resolve').checked;
            const nleFcpx = document.getElementById('nle-fcpx').checked;
            const includeColor = document.getElementById('include-color').checked;

            const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            
            let rawTreeStr = `📂 ${projectInput}\n`;
            
            if (includeDocs) {
                rawTreeStr += `┣ 📂 00_Production_Docs\n`;
            }
            
            rawTreeStr += `┣ 📂 01_Original_Media\n`;
            rawTreeStr += `┃ ┣ 📂 ${dayInput}\n`;
            
            let originalMediaChildren = [];
            for (let i = 0; i < camCount; i++) {
                originalMediaChildren.push(`Cam_${alphabet[i]}`);
            }
            if (includeSound) originalMediaChildren.push(`Sound`);
            if (includeReports) originalMediaChildren.push(`Reports`);

            for (let i = 0; i < originalMediaChildren.length; i++) {
                const char = (i === originalMediaChildren.length - 1) ? '┗' : '┣';
                rawTreeStr += `┃ ┃ ${char} 📂 ${originalMediaChildren[i]}\n`;
            }
            
            if (includeProxies) {
                rawTreeStr += `┣ 📂 02_Proxies\n`;
                rawTreeStr += `┃ ┗ 📂 ${dayInput}\n`;
            }

            let nles = [];
            if (nlePremiere) nles.push("Premiere Pro");
            if (nleResolve) nles.push("DaVinci Resolve");
            if (nleFcpx) nles.push("Final Cut Pro");
            if (includeColor) nles.push("LUTs_and_Color");

            if (nles.length > 0) {
                rawTreeStr += `┣ 📂 03_Projects\n`;
                for (let i = 0; i < nles.length; i++) {
                    const chr = (i === nles.length - 1) ? '┗' : '┣';
                    rawTreeStr += `┃ ${chr} 📂 ${nles[i]}\n`;
                }
            }

            if (includeAssets) {
                rawTreeStr += `┣ 📂 04_Assets_GFX\n`;
                rawTreeStr += `┗ 📂 05_Exports`;
            } else {
                rawTreeStr += `┗ 📂 04_Exports`;
            }

            const treeContainer = document.getElementById('tree-container');
            treeContainer.textContent = rawTreeStr.trim();
            treeContainer.classList.remove('structure-empty-state');
            treeContainer.classList.remove('flex', 'items-center', 'justify-center', 'text-center');
            treeContainer.classList.add('text-left');
            document.getElementById('structure-result').classList.remove('hidden');
            document.getElementById('structure-result').classList.add('block');
            
            // Store paths for export buttons
            currentGeneratedPaths = generateStructurePaths();
        });

        // Copy Visual Text
        document.getElementById('btn-copy-text').addEventListener('click', (e) => {
            navigator.clipboard.writeText(document.getElementById('tree-container').textContent).then(() => {
                const btn = e.currentTarget;
                const originalHtml = btn.innerHTML;
                btn.innerHTML = `<span class="material-symbols-outlined text-sm">check</span> Copied!`;
                setTimeout(() => btn.innerHTML = originalHtml, 2000);
            });
        });

        // Copy Bash Script
        document.getElementById('btn-copy-script').addEventListener('click', (e) => {
            if (currentGeneratedPaths.length === 0) return;
            const scriptStr = `mkdir -p ${currentGeneratedPaths.map(p => `"${p}"`).join(' ')}`;
            navigator.clipboard.writeText(scriptStr).then(() => {
                const btn = e.currentTarget;
                const originalHtml = btn.innerHTML;
                btn.innerHTML = `<span class="material-symbols-outlined text-sm">check</span> Copied!`;
                setTimeout(() => btn.innerHTML = originalHtml, 2000);
            });
        });

        // Download ZIP
        document.getElementById('btn-download-zip').addEventListener('click', (e) => {
            if (currentGeneratedPaths.length === 0 || typeof JSZip === 'undefined') return;
            
            const btn = e.currentTarget;
            const originalHtml = btn.innerHTML;
            btn.innerHTML = `<span class="material-symbols-outlined text-sm">hourglass_empty</span> Zipping...`;
            
            const zip = new JSZip();
            
            // Add folders to zip
            currentGeneratedPaths.forEach(path => {
                zip.folder(path);
            });

            // Generate and trigger download
            zip.generateAsync({ type: "blob" })
                .then(function(content) {
                    // FileSaver.js function
                    saveAs(content, `${currentProjectName}_Structure.zip`);
                    btn.innerHTML = `<span class="material-symbols-outlined text-sm">check</span> Downloaded!`;
                    setTimeout(() => btn.innerHTML = originalHtml, 2000);
                });
        });

        // Initialize Routine
        addCamera();

        // ═══════════════════════════════════════════════════════════
        // CARD ROTATION SIMULATOR
        // ═══════════════════════════════════════════════════════════

        const CARD_TYPES = {
            "CFexpress Type B": [
                { label: "160GB", gb: 160 },
                { label: "256GB", gb: 256 },
                { label: "512GB", gb: 512 },
                { label: "1TB", gb: 1024 }
            ],
            "CFexpress Type A": [
                { label: "80GB", gb: 80 },
                { label: "160GB", gb: 160 }
            ],
            "SD UHS-II": [
                { label: "64GB", gb: 64 },
                { label: "128GB", gb: 128 },
                { label: "256GB", gb: 256 },
                { label: "512GB", gb: 512 }
            ],
            "CFast 2.0": [
                { label: "128GB", gb: 128 },
                { label: "256GB", gb: 256 },
                { label: "512GB", gb: 512 }
            ],
            "SSD (Externo/Atomos)": [
                { label: "500GB", gb: 500 },
                { label: "1TB", gb: 1024 },
                { label: "2TB", gb: 2048 }
            ]
        };

        // Sim DOM refs
        const simCamSelect = document.getElementById('sim-cam-select');
        const simCodecSelect = document.getElementById('sim-codec-select');
        const simResSelect = document.getElementById('sim-res-select');
        const simFpsSelect = document.getElementById('sim-fps-select');
        const simCardType = document.getElementById('sim-card-type');
        const simCardSize = document.getElementById('sim-card-size');
        const simSourceSpeed = document.getElementById('sim-source-speed');
        const simTargetSpeed = document.getElementById('sim-target-speed');
        const simHours = document.getElementById('sim-hours');
        const btnRunSim = document.getElementById('btn-run-sim');
        const simResults = document.getElementById('sim-results');
        const simCanvas = document.getElementById('sim-timeline-canvas');

        // Populate camera select
        Object.keys(cameraData).forEach(cam => {
            const opt = document.createElement('option');
            opt.value = cam;
            opt.textContent = cam;
            simCamSelect.appendChild(opt);
        });

        // Populate card type select
        Object.keys(CARD_TYPES).forEach(type => {
            const opt = document.createElement('option');
            opt.value = type;
            opt.textContent = type;
            simCardType.appendChild(opt);
        });
        // Init card sizes
        function updateCardSizes() {
            const type = simCardType.value;
            simCardSize.innerHTML = '';
            if (CARD_TYPES[type]) {
                CARD_TYPES[type].forEach(s => {
                    const opt = document.createElement('option');
                    opt.value = s.gb;
                    opt.textContent = s.label;
                    simCardSize.appendChild(opt);
                });
            }
        }
        simCardType.addEventListener('change', updateCardSizes);
        // Set default
        simCardType.value = "SD UHS-II";
        updateCardSizes();

        // Sim camera cascade selects (mirrors main calculator logic)
        let simCamCodecs = null, simResolutions = null, simFpsData = null;

        simCamSelect.addEventListener('change', () => {
            simCamCodecs = cameraData[simCamSelect.value];
            simCodecSelect.innerHTML = '<option value="" disabled selected>Select Codec...</option>';
            simResSelect.innerHTML = '<option value="" disabled selected>Res</option>';
            simFpsSelect.innerHTML = '<option value="" disabled selected>FPS</option>';
            simResSelect.disabled = true;
            simFpsSelect.disabled = true;
            if (simCamCodecs) {
                simCodecSelect.disabled = false;
                Object.keys(simCamCodecs).forEach(c => {
                    const o = document.createElement('option');
                    o.value = c; o.textContent = c;
                    simCodecSelect.appendChild(o);
                });
                simCodecSelect.selectedIndex = 1;
                simCodecSelect.dispatchEvent(new Event('change'));
            }
        });

        simCodecSelect.addEventListener('change', () => {
            simResolutions = simCamCodecs[simCodecSelect.value];
            simResSelect.innerHTML = '<option value="" disabled selected>Res</option>';
            simFpsSelect.innerHTML = '<option value="" disabled selected>FPS</option>';
            simFpsSelect.disabled = true;
            if (simResolutions) {
                simResSelect.disabled = false;
                Object.keys(simResolutions).forEach(r => {
                    const o = document.createElement('option');
                    o.value = r; o.textContent = r;
                    simResSelect.appendChild(o);
                });
                simResSelect.selectedIndex = 1;
                simResSelect.dispatchEvent(new Event('change'));
            }
        });

        simResSelect.addEventListener('change', () => {
            simFpsData = simResolutions[simResSelect.value];
            simFpsSelect.innerHTML = '<option value="" disabled selected>FPS</option>';
            if (simFpsData) {
                simFpsSelect.disabled = false;
                Object.keys(simFpsData).forEach(f => {
                    const o = document.createElement('option');
                    o.value = simFpsData[f]; o.textContent = f;
                    simFpsSelect.appendChild(o);
                });
                simFpsSelect.selectedIndex = 1;
                simFpsSelect.dispatchEvent(new Event('change'));
            }
        });

        const simActiveCamSelect = document.getElementById('sim-active-cam-select');
        let importedCameras = [];

        function importCameraToSim(index) {
            const blockData = importedCameras[index];
            if (!blockData) return;
            
            simCamSelect.value = blockData.camVal;
            simCamSelect.dispatchEvent(new Event('change'));
            
            // Brief delay for cascade
            setTimeout(() => {
                if (blockData.codecVal) { simCodecSelect.value = blockData.codecVal; simCodecSelect.dispatchEvent(new Event('change')); }
                setTimeout(() => {
                    if (blockData.resVal) { simResSelect.value = blockData.resVal; simResSelect.dispatchEvent(new Event('change')); }
                    setTimeout(() => {
                        if (blockData.fpsIdx >= 0) {
                            simFpsSelect.selectedIndex = blockData.fpsIdx;
                            simFpsSelect.dispatchEvent(new Event('change'));
                        }
                    }, 50);
                }, 50);
            }, 50);
        }

        // Sync from Calculator
        document.getElementById('btn-import-calc').addEventListener('click', () => {
            const blocks = camerasContainer.querySelectorAll('.camera-block');
            if (blocks.length === 0) return;
            
            importedCameras = [];
            const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            
            blocks.forEach((block, idx) => {
                const camVal = block.querySelector('.cam-select').value;
                if (camVal) {
                    importedCameras.push({
                        label: `Cam ${alphabet[idx]} (${camVal.split('(')[0].trim()})`,
                        camVal: camVal,
                        codecVal: block.querySelector('.codec-select').value,
                        resVal: block.querySelector('.res-select').value,
                        fpsIdx: block.querySelector('.fps-select').selectedIndex
                    });
                }
            });
            
            if (importedCameras.length > 0) {
                simActiveCamSelect.innerHTML = '';
                importedCameras.forEach((cam, idx) => {
                    const opt = document.createElement('option');
                    opt.value = idx;
                    opt.textContent = cam.label;
                    simActiveCamSelect.appendChild(opt);
                });
                
                // Sync Shooting Hours
                const calcHours = parseInt(document.getElementById('hours-slider').value);
                const simHoursSelect = document.getElementById('sim-hours');
                let closestOption = Array.from(simHoursSelect.options).reduce((prev, curr) => {
                    return (Math.abs(parseInt(curr.value) - calcHours) < Math.abs(parseInt(prev.value) - calcHours) ? curr : prev);
                });
                simHoursSelect.value = closestOption.value;

                simActiveCamSelect.classList.remove('hidden');
                simActiveCamSelect.value = 0;
                importCameraToSim(0);
            }
        });

        simActiveCamSelect.addEventListener('change', (e) => {
            importCameraToSim(e.target.value);
        });

        // ── Simulation Engine ──
        function simulateCardRotation(gbPerHour, cardCapacityGB, sourceSpeedMBps, targetSpeedMBps, shootingHours) {
            const totalMinutes = shootingHours * 60;
            const gbPerMinute = gbPerHour / 60;
            const bottleneckMBps = Math.min(sourceSpeedMBps, targetSpeedMBps);

            const fillTimeMin = cardCapacityGB / gbPerMinute;
            const offloadTimeMin = (cardCapacityGB * 1024) / (bottleneckMBps * 60);

            const minCards = Math.max(2, Math.ceil(offloadTimeMin / fillTimeMin) + 1);
            const numCards = minCards;

            // Initialize cards
            const cards = [];
            for (let i = 0; i < numCards; i++) {
                cards.push({ id: i, status: 'ready', usedGB: 0, busyUntil: -1 });
            }

            // Timeline data: for each card, array of {start, end, status}
            const timeline = [];
            for (let i = 0; i < numCards; i++) timeline.push([]);

            let currentCardIdx = 0;
            let swapCount = 0;
            let bottleneckEvents = [];
            let offloadQueue = [];
            let offloadingCard = null;

            // Start first card recording
            cards[0].status = 'recording';
            let recordStart = 0;

            for (let t = 0; t <= totalMinutes; t += 0.5) {
                // Check if current recording card is full
                if (cards[currentCardIdx].status === 'recording') {
                    cards[currentCardIdx].usedGB += gbPerMinute * 0.5;

                    if (cards[currentCardIdx].usedGB >= cardCapacityGB) {
                        // Card full — end recording segment
                        timeline[currentCardIdx].push({ start: recordStart, end: t, status: 'recording' });
                        cards[currentCardIdx].status = 'queued';
                        cards[currentCardIdx].usedGB = cardCapacityGB;
                        offloadQueue.push(currentCardIdx);

                        // Find next ready card
                        let nextIdx = -1;
                        for (let j = 0; j < numCards; j++) {
                            if (j !== currentCardIdx && cards[j].status === 'ready') {
                                nextIdx = j;
                                break;
                            }
                        }

                        if (nextIdx === -1) {
                            bottleneckEvents.push(t);
                            // Wait for any card — find soonest available
                            for (let j = 0; j < numCards; j++) {
                                if (j !== currentCardIdx && (cards[j].status === 'offloading' || cards[j].status === 'queued')) {
                                    nextIdx = j;
                                    break;
                                }
                            }
                            if (nextIdx === -1) nextIdx = (currentCardIdx + 1) % numCards;
                        }

                        swapCount++;
                        currentCardIdx = nextIdx;
                        if (cards[currentCardIdx].status === 'ready') {
                            cards[currentCardIdx].status = 'recording';
                            cards[currentCardIdx].usedGB = 0;
                            recordStart = t;
                        }
                    }
                }

                // Process offload queue
                if (offloadingCard === null && offloadQueue.length > 0) {
                    const qIdx = offloadQueue.shift();
                    // Mark queued segment
                    const lastSeg = timeline[qIdx][timeline[qIdx].length - 1];
                    const queueStart = lastSeg ? lastSeg.end : t;
                    if (t > queueStart) {
                        timeline[qIdx].push({ start: queueStart, end: t, status: 'queued' });
                    }
                    offloadingCard = { idx: qIdx, startTime: t, endTime: t + offloadTimeMin };
                    cards[qIdx].status = 'offloading';
                }

                // Check if offload finished
                if (offloadingCard && t >= offloadingCard.endTime) {
                    const oIdx = offloadingCard.idx;
                    timeline[oIdx].push({ start: offloadingCard.startTime, end: t, status: 'offloading' });
                    cards[oIdx].status = 'ready';
                    cards[oIdx].usedGB = 0;
                    offloadingCard = null;

                    // If current card was waiting, start it
                    if (cards[currentCardIdx].status !== 'recording' && cards[currentCardIdx].status === 'ready') {
                        // Check if oIdx is the one we were waiting for
                        if (currentCardIdx === oIdx || cards[currentCardIdx].status === 'ready') {
                            cards[currentCardIdx].status = 'recording';
                            cards[currentCardIdx].usedGB = 0;
                            recordStart = t;
                        }
                    }
                }
            }

            // Close any open recording segment
            if (cards[currentCardIdx].status === 'recording') {
                timeline[currentCardIdx].push({ start: recordStart, end: totalMinutes, status: 'recording' });
            }
            // Close any open offload
            if (offloadingCard) {
                timeline[offloadingCard.idx].push({
                    start: offloadingCard.startTime,
                    end: Math.min(offloadingCard.endTime, totalMinutes),
                    status: 'offloading'
                });
            }

            return {
                fillTimeMin,
                offloadTimeMin,
                minCards,
                swapCount,
                bottleneckEvents,
                timeline,
                totalMinutes
            };
        }

        // ── Canvas Timeline Renderer ──
        function renderTimeline(canvas, simData) {
            const { timeline, totalMinutes, bottleneckEvents } = simData;
            const numCards = timeline.length;

            const dpr = window.devicePixelRatio || 1;
            const ROW_H = 48;
            const LABEL_W = 80;
            const PAD_TOP = 40;
            const PAD_BOTTOM = 36;
            const PAD_RIGHT = 20;

            const wrapWidth = canvas.parentElement.clientWidth;
            const chartW = Math.max(wrapWidth - LABEL_W - PAD_RIGHT, 400);
            const canvasW = LABEL_W + chartW + PAD_RIGHT;
            const canvasH = PAD_TOP + numCards * ROW_H + PAD_BOTTOM;

            canvas.width = canvasW * dpr;
            canvas.height = canvasH * dpr;
            canvas.style.width = canvasW + 'px';
            canvas.style.height = canvasH + 'px';

            const ctx = canvas.getContext('2d');
            ctx.scale(dpr, dpr);
            ctx.clearRect(0, 0, canvasW, canvasH);

            // Colors
            const COLORS = {
                recording: '#ff4444',
                offloading: '#00E5FF',
                queued: '#ffc832',
                ready: '#00e676',
                idle: 'rgba(255, 255, 255, 0.05)'
            };

            const pxPerMin = chartW / totalMinutes;

            // Draw time axis
            ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
            ctx.font = 'bold 10px "Space Grotesk", sans-serif';
            ctx.textAlign = 'center';

            // Time labels
            let tickInterval;
            if (totalMinutes <= 60) tickInterval = 10;
            else if (totalMinutes <= 240) tickInterval = 30;
            else if (totalMinutes <= 480) tickInterval = 60;
            else tickInterval = 120;

            for (let m = 0; m <= totalMinutes; m += tickInterval) {
                const x = LABEL_W + m * pxPerMin;
                ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
                ctx.fillRect(x, PAD_TOP, 1, numCards * ROW_H);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
                const hrs = Math.floor(m / 60);
                const mins = m % 60;
                ctx.fillText(hrs > 0 ? `${hrs}h${mins > 0 ? mins + 'm' : ''}` : `${mins}m`, x, PAD_TOP - 8);
            }

            // Draw rows
            for (let i = 0; i < numCards; i++) {
                const y = PAD_TOP + i * ROW_H;

                // Row background
                ctx.fillStyle = i % 2 === 0 ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255, 255, 255, 0.01)';
                ctx.fillRect(LABEL_W, y, chartW, ROW_H);

                // Row border
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
                ctx.strokeRect(LABEL_W, y, chartW, ROW_H);

                // Card label
                ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
                ctx.font = 'bold 13px "Space Grotesk", sans-serif';
                ctx.textAlign = 'right';
                ctx.fillText(`Card ${i + 1}`, LABEL_W - 10, y + ROW_H / 2 + 5);

                // Draw segments
                const segments = timeline[i];
                segments.forEach(seg => {
                    const sx = LABEL_W + seg.start * pxPerMin;
                    const sw = (seg.end - seg.start) * pxPerMin;
                    const blockPad = 4;

                    ctx.fillStyle = COLORS[seg.status] || COLORS.idle;
                    ctx.fillRect(sx + 1, y + blockPad, Math.max(sw - 2, 2), ROW_H - blockPad * 2);

                    // Border on block
                    ctx.strokeStyle = '#1a1a1a';
                    ctx.lineWidth = 2;
                    ctx.strokeRect(sx + 1, y + blockPad, Math.max(sw - 2, 2), ROW_H - blockPad * 2);
                    ctx.lineWidth = 1;
                });
            }

            // Bottleneck markers
            bottleneckEvents.forEach(t => {
                const x = LABEL_W + t * pxPerMin;
                ctx.strokeStyle = '#e63b2e';
                ctx.lineWidth = 3;
                ctx.setLineDash([6, 4]);
                ctx.beginPath();
                ctx.moveTo(x, PAD_TOP);
                ctx.lineTo(x, PAD_TOP + numCards * ROW_H);
                ctx.stroke();
                ctx.setLineDash([]);
                ctx.lineWidth = 1;

                // Warning icon
                ctx.fillStyle = '#e63b2e';
                ctx.font = 'bold 14px sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText('⚠', x, PAD_TOP + numCards * ROW_H + 16);
            });

            // Outer border
            ctx.strokeStyle = '#1a1a1a';
            ctx.lineWidth = 2;
            ctx.strokeRect(LABEL_W, PAD_TOP, chartW, numCards * ROW_H);
        }

        // ── Run Simulation ──
        btnRunSim.addEventListener('click', () => {
            const gbPerHour = parseInt(simFpsSelect.value);
            const cardGB = parseInt(simCardSize.value);
            const sourceSpeed = parseInt(simSourceSpeed.value);
            const targetSpeed = parseInt(simTargetSpeed.value);
            const hours = parseInt(simHours.value);

            if (!gbPerHour || isNaN(gbPerHour) || gbPerHour <= 0) {
                alert('Please select a camera, codec, resolution and FPS first.');
                return;
            }

            const result = simulateCardRotation(gbPerHour, cardGB, sourceSpeed, targetSpeed, hours);

            // Update stat cards
            document.getElementById('sim-min-cards').textContent = result.minCards;

            const fillMin = Math.round(result.fillTimeMin);
            document.getElementById('sim-fill-time').textContent = fillMin >= 60
                ? `${Math.floor(fillMin / 60)}h${fillMin % 60}m`
                : `${fillMin}m`;

            const offMin = Math.round(result.offloadTimeMin);
            document.getElementById('sim-offload-time').textContent = offMin >= 60
                ? `${Math.floor(offMin / 60)}h${offMin % 60}m`
                : offMin < 1 ? '<1m' : `${offMin}m`;

            document.getElementById('sim-total-swaps').textContent = result.swapCount;

            // Semaphore
            const sem = document.getElementById('sim-semaphore');
            const semLabel = document.getElementById('sim-semaphore-label');
            const ratio = result.offloadTimeMin / result.fillTimeMin;

            sem.classList.remove('semaphore--ok', 'semaphore--tight', 'semaphore--bottleneck');

            if (ratio < 0.5) {
                sem.classList.add('semaphore--ok');
                semLabel.textContent = 'Comfortable — offload much faster than recording';
            } else if (ratio < 0.9) {
                sem.classList.add('semaphore--tight');
                semLabel.textContent = 'Tight — reduced margin, consider an extra card';
            } else {
                sem.classList.add('semaphore--bottleneck');
                semLabel.textContent = '⚠ Bottleneck — offload can\'t keep up, risk of shooting downtime';
            }

            // Show results
            simResults.classList.remove('hidden');

            // Render timeline
            setTimeout(() => renderTimeline(simCanvas, result), 50);
        });

        // Resize handler for timeline
        window.addEventListener('resize', () => {
            if (!simResults.classList.contains('hidden') && simCanvas._lastSimData) {
                renderTimeline(simCanvas, simCanvas._lastSimData);
            }
        });

        // Patch btnRunSim to store last sim data
        const origRunClick = btnRunSim.onclick;
        btnRunSim.addEventListener('click', () => {
            // Store for resize
            const gbPerHour = parseInt(simFpsSelect.value);
            const cardGB = parseInt(simCardSize.value);
            if (gbPerHour && cardGB) {
                simCanvas._lastSimData = simulateCardRotation(
                    gbPerHour, cardGB,
                    parseInt(simSourceSpeed.value),
                    parseInt(simTargetSpeed.value),
                    parseInt(simHours.value)
                );
            }
        });

        // ═══════════════════════════════════════════════════
        // VIEW 3: TECHNICAL SHOTLIST ESTIMATOR
        // ═══════════════════════════════════════════════════
        
        let shotlistCameras = [];
        const btnSyncShotlist = document.getElementById('btn-sync-shotlist');
        const btnAddShot = document.getElementById('btn-add-shot');
        const shotlistContainer = document.getElementById('shotlist-container');
        const shotlistTotalDisplay = document.getElementById('shotlist-total-display');
        const btnExportShotlist = document.getElementById('btn-export-shotlist');
        
        function updateShotlistTotal() {
            let totalGB = 0;
            const shotBlocks = shotlistContainer.querySelectorAll('.shot-block');
            shotBlocks.forEach(block => {
                const gb = parseFloat(block.dataset.gb) || 0;
                totalGB += gb;
            });
            shotlistTotalDisplay.innerHTML = `${totalGB.toFixed(2)} <span class="text-xl">GB</span>`;
        }

        function createShotBlock() {
            const block = document.createElement('div');
            block.className = 'shot-block bg-white p-4 neo-border neo-shadow-hover relative group flex flex-col md:flex-row gap-4 items-end mb-4';
            block.dataset.gb = "0";

            // Camera Options
            let camOptions = '<option value="" disabled selected>Select Cam...</option>';
            shotlistCameras.forEach((cam) => {
                camOptions += `<option value="${cam.gbPerHour}">Cam ${cam.letter} - ${cam.label}</option>`;
            });

            block.innerHTML = `
                <div class="w-full md:w-1/4">
                    <label class="block text-[10px] font-bold mb-1 uppercase tracking-widest text-primary/70">Shot Name</label>
                    <input type="text" class="neo-input shot-name" placeholder="e.g. Wide Shot" value="Shot">
                </div>
                <div class="w-full md:w-1/4">
                    <label class="block text-[10px] font-bold mb-1 uppercase tracking-widest text-primary/70">Lens</label>
                    <input type="text" class="neo-input shot-lens" placeholder="e.g. 50mm" value="">
                </div>
                <div class="w-full md:w-1/4">
                    <label class="block text-[10px] font-bold mb-1 uppercase tracking-widest text-primary/70">Camera</label>
                    <select class="neo-input shot-camera text-sm appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M7%2010l5%205%205-5z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-0.5rem)_center] pr-6">
                        ${camOptions}
                    </select>
                </div>
                <div class="w-full md:w-[15%]">
                    <label class="block text-[10px] font-bold mb-1 uppercase tracking-widest text-primary/70">Duration</label>
                    <div class="relative">
                        <input type="number" min="0.1" step="0.1" class="neo-input shot-duration pr-8" value="1.0">
                        <span class="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-bold opacity-50 uppercase">min</span>
                    </div>
                </div>
                <div class="w-full md:w-[10%]">
                    <label class="block text-[10px] font-bold mb-1 uppercase tracking-widest text-primary/70">Takes</label>
                    <input type="number" min="1" step="1" class="neo-input shot-takes" value="1">
                </div>
                <div class="w-full md:w-auto text-right min-w-[80px]">
                    <div class="text-[10px] font-bold uppercase tracking-widest text-primary/70 mb-1">Estimate</div>
                    <div class="shot-gb font-display font-bold text-2xl text-primary drop-shadow-[1px_1px_0px_#0055ff]">0.00</div>
                </div>
                <button class="btn-remove-shot liquid-btn liquid-btn-danger absolute -top-3 -right-3 rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity !min-w-0 !min-h-0">
                    <span class="material-symbols-outlined text-sm m-0 p-0 leading-none">close</span>
                </button>
            `;

            const calcShotGB = () => {
                const camSelect = block.querySelector('.shot-camera');
                const gbPerHour = parseFloat(camSelect.value) || 0;
                const duration = parseFloat(block.querySelector('.shot-duration').value) || 0;
                const takes = parseInt(block.querySelector('.shot-takes').value) || 1;
                
                const gbPerMin = gbPerHour / 60;
                const shotGB = gbPerMin * duration * takes;
                
                block.dataset.gb = shotGB;
                block.querySelector('.shot-gb').textContent = shotGB.toFixed(2);
                updateShotlistTotal();
            };

            block.querySelector('.shot-camera').addEventListener('change', calcShotGB);
            block.querySelector('.shot-duration').addEventListener('input', calcShotGB);
            block.querySelector('.shot-takes').addEventListener('input', calcShotGB);
            block.querySelector('.btn-remove-shot').addEventListener('click', () => {
                block.remove();
                updateShotlistTotal();
                if (shotlistContainer.children.length === 0) {
                    shotlistTotalDisplay.innerHTML = `0.00 <span class="text-xl">GB</span>`;
                }
            });

            // Auto-select first camera if available
            if (shotlistCameras.length > 0) {
                block.querySelector('.shot-camera').selectedIndex = 1;
                calcShotGB();
            }

            return block;
        }

        if (btnSyncShotlist) {
            btnSyncShotlist.addEventListener('click', () => {
                const blocks = camerasContainer.querySelectorAll('.camera-block');
                if (blocks.length === 0) {
                    alert('Add at least one camera in the Calculator first!');
                    return;
                }

                shotlistCameras = [];
                const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                
                blocks.forEach((block, idx) => {
                    const fpsSelect = block.querySelector('.fps-select');
                    if (fpsSelect && fpsSelect.value) {
                        const camVal = block.querySelector('.cam-select').value;
                        const gbPerHour = fpsSelect.value;
                        shotlistCameras.push({
                            letter: alphabet[idx],
                            label: camVal.split('(')[0].trim(),
                            gbPerHour: gbPerHour
                        });
                    }
                });

                if (shotlistCameras.length > 0) {
                    shotlistContainer.innerHTML = '';
                    btnAddShot.classList.remove('hidden');
                    shotlistContainer.appendChild(createShotBlock());
                    
                    const origText = btnSyncShotlist.innerHTML;
                    btnSyncShotlist.innerHTML = `<span class="material-symbols-outlined text-sm align-middle mr-1">check</span> Synced!`;
                    btnSyncShotlist.classList.add('bg-green-100', 'text-green-800');
                    setTimeout(() => {
                        btnSyncShotlist.innerHTML = origText;
                        btnSyncShotlist.classList.remove('bg-green-100', 'text-green-800');
                    }, 2000);
                } else {
                    alert('Please fully configure your cameras in the Calculator (Select Res & FPS).');
                }
            });
        }

        if (btnAddShot) {
            btnAddShot.addEventListener('click', () => {
                shotlistContainer.appendChild(createShotBlock());
            });
        }
        
        if (btnExportShotlist) {
            btnExportShotlist.addEventListener('click', () => {
                const shotBlocks = shotlistContainer.querySelectorAll('.shot-block');
                if (shotBlocks.length === 0) {
                    alert('No shots to export.');
                    return;
                }
                
                let csvContent = "data:text/csv;charset=utf-8,";
                csvContent += "Shot Name,Lens,Camera,Duration (min),Takes,Est. GB\n";
                
                shotBlocks.forEach(block => {
                    const name = block.querySelector('.shot-name').value || "Unnamed Shot";
                    const lens = block.querySelector('.shot-lens').value || "N/A";
                    const camSelect = block.querySelector('.shot-camera');
                    const cam = camSelect.options[camSelect.selectedIndex].text;
                    const duration = block.querySelector('.shot-duration').value || "0";
                    const takes = block.querySelector('.shot-takes').value || "1";
                    const gb = parseFloat(block.dataset.gb).toFixed(2);
                    
                    csvContent += `"${name}","${lens}","${cam}","${duration}","${takes}","${gb}"\n`;
                });
                
                const encodedUri = encodeURI(csvContent);
                const link = document.createElement("a");
                link.setAttribute("href", encodedUri);
                link.setAttribute("download", "sizematters_shotlist.csv");
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
        }

        // ═══════════════════════════════════════════════════
        // VIEW 5: TECHNICAL PRODUCTION REPORT
        // ═══════════════════════════════════════════════════
        
        const btnGenerateReport = document.getElementById('btn-generate-report');
        const reportOutputContainer = document.getElementById('report-output-container');
        const reportPreview = document.getElementById('report-preview');
        const btnPrintReport = document.getElementById('btn-print-report');
        const btnCopyReport = document.getElementById('btn-copy-report');

        function generateTechnicalReportData() {
            // --- Collect Data ---
            const projectName = document.getElementById('meta-project-name')?.value || 'Untitled Project';
            const company    = document.getElementById('meta-company')?.value || '';
            const shootingDay = document.getElementById('meta-shooting-day')?.value || '';
            const location   = document.getElementById('meta-location')?.value || '';
            const notes      = document.getElementById('meta-notes')?.value || '';
            const hours      = hoursSlider ? hoursSlider.value : 0;
            const camCount   = productionSetup.length;
            const dateStr    = new Date().toLocaleString();

            const totalGBPerHour   = productionSetup.reduce((acc, cam) => acc + (cam.gbPerHour || 0), 0);
            const totalOriginalGB  = totalGBPerHour * hours;
            const multiplier       = typeof getBackupMultiplier === 'function' ? getBackupMultiplier() : 1;
            const marginText       = document.getElementById('backup-margin-display')?.textContent || '0%';
            const marginValue      = parseFloat(marginText) || 0;
            const protectedGB      = totalOriginalGB * multiplier * (1 + marginValue / 100);
            const strategySelect   = document.getElementById('backup-strategy-select');
            const strategyText     = strategySelect ? strategySelect.options[strategySelect.selectedIndex].text : 'N/A';
            const rec              = recommendDrives(protectedGB);

            const srcSelect   = document.getElementById('source-media-select');
            const tgtSelect   = document.getElementById('target-drive-select');
            const srcText     = srcSelect ? srcSelect.options[srcSelect.selectedIndex].text : 'N/A';
            const tgtText     = tgtSelect ? tgtSelect.options[tgtSelect.selectedIndex].text : 'N/A';
            const offloadTime = document.getElementById('offload-time-display')?.textContent || 'N/A';

            const fmtStorage = (gb) => gb >= 1024 ? (gb/1024).toFixed(2) + ' TB' : gb.toFixed(2) + ' GB';

            // --- Build HTML ---
            let html = `<div class="report-briefing">`;

            // ── Report Hero ──────────────────────────────────────────
            html += `
                <div class="report-hero">
                    <div class="report-hero-meta">
                        <div class="report-label">SizeMatters.AI · Technical Report</div>
                        <h1 class="report-hero-title">${projectName}</h1>
                        <div class="report-hero-sub">
                            ${company ? `<span>${company}</span>` : ''}
                            ${shootingDay ? `<span>${shootingDay}</span>` : ''}
                            ${location ? `<span>${location}</span>` : ''}
                        </div>
                    </div>
                    <div class="report-hero-date">${dateStr}</div>
                </div>`;

            // ── Executive Summary Metrics ────────────────────────────
            html += `
                <div class="report-section">
                    <div class="report-section-header">Executive Summary</div>
                    <div class="report-metric-grid">
                        <div class="report-metric-card">
                            <div class="report-metric-label">Total Protected Storage</div>
                            <div class="report-metric-value">${fmtStorage(protectedGB)}</div>
                        </div>
                        <div class="report-metric-card">
                            <div class="report-metric-label">Shooting Duration</div>
                            <div class="report-metric-value">${hours}h</div>
                        </div>
                        <div class="report-metric-card">
                            <div class="report-metric-label">Active Cameras</div>
                            <div class="report-metric-value">${camCount}</div>
                        </div>
                        <div class="report-metric-card">
                            <div class="report-metric-label">Backup Multiplier</div>
                            <div class="report-metric-value">${multiplier.toFixed(1)}x</div>
                        </div>
                        <div class="report-metric-card">
                            <div class="report-metric-label">Est. Offload Time</div>
                            <div class="report-metric-value report-metric-cyan">${offloadTime}</div>
                        </div>
                        <div class="report-metric-card">
                            <div class="report-metric-label">Recommended Drive</div>
                            <div class="report-metric-value">${rec.text}</div>
                        </div>
                    </div>
                </div>`;

            // ── A. Camera Configuration ──────────────────────────────
            html += `<div class="report-section"><div class="report-section-header">A · Camera Configuration</div>`;
            if (camCount === 0) {
                html += `<p class="report-empty">No cameras configured.</p>`;
            } else {
                const blocks = camerasContainer.querySelectorAll('.camera-block');
                blocks.forEach((block, idx) => {
                    const camVal   = block.querySelector('.cam-select').value  || 'N/A';
                    const codecVal = block.querySelector('.codec-select').value || 'N/A';
                    const resVal   = block.querySelector('.res-select').value   || 'N/A';
                    const fpsSelect = block.querySelector('.fps-select');
                    const fpsVal   = fpsSelect.options[fpsSelect.selectedIndex]?.text || 'N/A';
                    const gbHr     = parseFloat(fpsSelect.value) || 0;
                    const estGb    = gbHr * hours;
                    html += `
                        <div class="report-camera-card">
                            <div class="report-camera-header">
                                <span class="report-camera-index">CAM ${idx + 1}</span>
                                <span class="report-camera-name">${camVal}</span>
                            </div>
                            <div class="report-camera-grid">
                                <div class="report-camera-field"><span class="report-camera-label">Codec</span><span>${codecVal}</span></div>
                                <div class="report-camera-field"><span class="report-camera-label">Resolution</span><span>${resVal}</span></div>
                                <div class="report-camera-field"><span class="report-camera-label">FPS</span><span>${fpsVal}</span></div>
                                <div class="report-camera-field"><span class="report-camera-label">Bitrate</span><span class="report-metric-cyan">${gbHr} GB/hr</span></div>
                                <div class="report-camera-field"><span class="report-camera-label">Est. Storage (${hours}h)</span><span class="report-metric-cyan">${fmtStorage(estGb)}</span></div>
                            </div>
                        </div>`;
                });
            }
            html += `</div>`;

            // ── B. Backup Strategy ───────────────────────────────────
            html += `
                <div class="report-section">
                    <div class="report-section-header">B · Backup Strategy</div>
                    <div class="report-data-grid">
                        <div class="report-data-row"><span class="report-data-label">Original Media Estimate</span><span class="report-data-value">${fmtStorage(totalOriginalGB)}</span></div>
                        <div class="report-data-row"><span class="report-data-label">Strategy</span><span class="report-data-value">${strategyText}</span></div>
                        <div class="report-data-row"><span class="report-data-label">Multiplier</span><span class="report-data-value">${multiplier.toFixed(1)}x</span></div>
                        <div class="report-data-row"><span class="report-data-label">Safety Margin</span><span class="report-data-value">${marginText}</span></div>
                        <div class="report-data-row report-data-row--highlight"><span class="report-data-label">Protected Storage Required</span><span class="report-data-value report-metric-cyan">${fmtStorage(protectedGB)}</span></div>
                        <div class="report-data-row"><span class="report-data-label">Recommended Configuration</span><span class="report-data-value">${rec.text}</span></div>
                    </div>`;
            const backupWarning = document.getElementById('backup-warning-container');
            if (backupWarning?.textContent?.includes('⚠')) {
                html += `<div class="report-risk-card">⚠ ${backupWarning.textContent.trim()}</div>`;
            }
            html += `</div>`;

            // ── C. DIT Offload Logistics ─────────────────────────────
            html += `
                <div class="report-section">
                    <div class="report-section-header">C · DIT Offload Logistics</div>
                    <div class="report-data-grid">
                        <div class="report-data-row"><span class="report-data-label">Source Media</span><span class="report-data-value">${srcText}</span></div>
                        <div class="report-data-row"><span class="report-data-label">Destination Drive</span><span class="report-data-value">${tgtText}</span></div>
                        <div class="report-data-row report-data-row--highlight"><span class="report-data-label">Estimated Offload Time</span><span class="report-data-value report-metric-cyan">${offloadTime}</span></div>
                    </div>
                </div>`;

            // ── D. Card Rotation Summary ─────────────────────────────
            html += `<div class="report-section"><div class="report-section-header">D · Card Rotation Summary</div>`;
            const simResults = document.getElementById('sim-results');
            if (simResults && !simResults.classList.contains('hidden')) {
                const minCards   = document.getElementById('sim-min-cards').textContent;
                const fillTime   = document.getElementById('sim-fill-time').textContent;
                const simOffload = document.getElementById('sim-offload-time').textContent;
                const totalSwaps = document.getElementById('sim-total-swaps').textContent;
                const semLabel   = document.getElementById('sim-semaphore-label').textContent;
                const isBottleneck = semLabel.toLowerCase().includes('bottleneck');
                html += `
                    <div class="report-data-grid">
                        <div class="report-data-row"><span class="report-data-label">Min. Cards Needed</span><span class="report-data-value">${minCards}</span></div>
                        <div class="report-data-row"><span class="report-data-label">Fill Time / Card</span><span class="report-data-value">${fillTime}</span></div>
                        <div class="report-data-row"><span class="report-data-label">Offload Time / Card</span><span class="report-data-value">${simOffload}</span></div>
                        <div class="report-data-row"><span class="report-data-label">Total Swaps</span><span class="report-data-value">${totalSwaps}</span></div>
                    </div>
                    ${isBottleneck ? `<div class="report-risk-card">⚠ Bottleneck detected: ${semLabel}</div>` : `<div class="report-chip report-chip--ok">✓ ${semLabel}</div>`}`;
            } else {
                html += `<p class="report-empty">No card rotation simulation has been generated yet.</p>`;
            }
            html += `</div>`;

            // ── E. Folder Structure ──────────────────────────────────
            html += `<div class="report-section"><div class="report-section-header">E · Project Folder Structure</div>`;
            if (typeof currentGeneratedPaths !== 'undefined' && currentGeneratedPaths.length > 0) {
                const treeStr = document.getElementById('tree-container')?.textContent || '';
                html += `<pre class="report-pre">${treeStr}</pre>`;
            } else {
                html += `<p class="report-empty">No folder structure has been generated yet.</p>`;
            }
            html += `</div>`;

            // ── F. Shotlist Estimate ─────────────────────────────────
            html += `<div class="report-section"><div class="report-section-header">F · Shotlist Estimate</div>`;
            const shotlistContainerNode = document.getElementById('shotlist-container');
            if (shotlistContainerNode && shotlistContainerNode.children.length > 0) {
                const shotBlocks = shotlistContainerNode.querySelectorAll('.shot-block');
                let totalDuration = 0, totalGb = 0;
                let rows = '';
                shotBlocks.forEach(block => {
                    const name     = block.querySelector('.shot-name').value || 'Unnamed Shot';
                    const lens     = block.querySelector('.shot-lens').value || 'N/A';
                    const camSel   = block.querySelector('.shot-camera');
                    const cam      = camSel.options[camSel.selectedIndex]?.text || 'N/A';
                    const duration = parseFloat(block.querySelector('.shot-duration').value) || 0;
                    const takes    = parseInt(block.querySelector('.shot-takes').value) || 1;
                    const gb       = parseFloat(block.dataset.gb) || 0;
                    totalDuration += (duration * takes);
                    totalGb += gb;
                    rows += `<tr><td>${name}</td><td>${lens}</td><td>${cam}</td><td class="center">${duration}</td><td class="center">${takes}</td><td class="right">${gb.toFixed(2)} GB</td></tr>`;
                });
                html += `
                    <div class="report-data-row report-data-row--highlight" style="margin-bottom:1rem;">
                        <span class="report-data-label">Total Shots: ${shotBlocks.length} · Duration: ${totalDuration.toFixed(1)} min</span>
                        <span class="report-data-value report-metric-cyan">${fmtStorage(totalGb)}</span>
                    </div>
                    <table class="report-table">
                        <thead><tr><th>Shot</th><th>Lens</th><th>Camera</th><th>Min</th><th>Takes</th><th>Est. GB</th></tr></thead>
                        <tbody>${rows}</tbody>
                    </table>`;
            } else {
                html += `<p class="report-empty">No shotlist estimate has been created yet.</p>`;
            }
            html += `</div>`;

            // ── G. Workflow Warnings ─────────────────────────────────
            html += `<div class="report-section"><div class="report-section-header">G · Workflow Warnings</div>`;
            let hasWarnings = false;
            const bkWarn = document.getElementById('backup-warning-container');
            if (bkWarn?.textContent?.includes('⚠')) {
                html += `<div class="report-risk-card">⚠ Backup: ${bkWarn.textContent.trim()}</div>`;
                hasWarnings = true;
            }
            if (simResults && !simResults.classList.contains('hidden')) {
                const semLabel = document.getElementById('sim-semaphore-label').textContent;
                if (semLabel.toLowerCase().includes('bottleneck')) {
                    html += `<div class="report-risk-card">⚠ Card Rotation: ${semLabel}</div>`;
                    hasWarnings = true;
                }
            }
            if (!hasWarnings) {
                html += `<div class="report-chip report-chip--ok">✓ No active workflow warnings. The plan looks safe based on current estimates.</div>`;
            }
            html += `</div>`;

            // ── H. Notes ────────────────────────────────────────────
            if (notes) {
                html += `
                    <div class="report-section">
                        <div class="report-section-header">H · Project Notes</div>
                        <p class="report-notes">${notes}</p>
                    </div>`;
            }

            // ── Footer ───────────────────────────────────────────────
            html += `
                <div class="report-footer">
                    Generated by SizeMatters.AI · ${dateStr}
                </div>`;

            html += `</div>`; // .report-briefing
            return html;
        }

        if (btnGenerateReport) {
            btnGenerateReport.addEventListener('click', () => {
                const html = generateTechnicalReportData();
                reportPreview.innerHTML = html;
                reportOutputContainer.classList.remove('hidden');
            });
        }

        if (btnPrintReport) {
            btnPrintReport.addEventListener('click', () => {
                window.print();
            });
        }

        if (btnCopyReport) {
            btnCopyReport.addEventListener('click', (e) => {
                const btn = e.currentTarget;
                const originalHtml = btn.innerHTML;
                
                const text = reportPreview.innerText;
                navigator.clipboard.writeText(text).then(() => {
                    btn.innerHTML = `<span class="material-symbols-outlined">check</span> Copied!`;
                    setTimeout(() => btn.innerHTML = originalHtml, 2000);
                });
            });
        }

        // ═══════════════════════════════════════════════════
        // VIEW 6: PROJECT MANAGEMENT SYSTEM (SAVE & LOAD)
        // ═══════════════════════════════════════════════════

        const metaProjectName = document.getElementById('meta-project-name');
        const metaCompany = document.getElementById('meta-company');
        const metaShootingDay = document.getElementById('meta-shooting-day');
        const metaLocation = document.getElementById('meta-location');
        const metaNotes = document.getElementById('meta-notes');

        const saveStatusIndicator = document.getElementById('save-status-indicator');
        const btnSaveProject = document.getElementById('btn-save-project');
        const btnLoadProject = document.getElementById('btn-load-project');
        const btnExportProject = document.getElementById('btn-export-project');
        const btnImportProject = document.getElementById('btn-import-project');
        const btnNewProject = document.getElementById('btn-new-project');

        const structProjectName = document.getElementById('project-name');
        const structShootingDay = document.getElementById('shooting-day');

        // Sync Metadata with Structure Generator inputs
        if (metaProjectName && structProjectName) {
            metaProjectName.addEventListener('input', (e) => { structProjectName.value = e.target.value; scheduleAutoSave(); });
            structProjectName.addEventListener('input', (e) => { metaProjectName.value = e.target.value; scheduleAutoSave(); });
        }
        if (metaShootingDay && structShootingDay) {
            metaShootingDay.addEventListener('input', (e) => { structShootingDay.value = e.target.value; scheduleAutoSave(); });
            structShootingDay.addEventListener('input', (e) => { metaShootingDay.value = e.target.value; scheduleAutoSave(); });
        }
        
        [metaCompany, metaLocation, metaNotes].forEach(el => {
            if(el) el.addEventListener('input', scheduleAutoSave);
        });

        function setSaveStatus(message, isError = false) {
            if(!saveStatusIndicator) return;
            saveStatusIndicator.textContent = message;
            saveStatusIndicator.classList.remove('hidden');
            if(isError) {
                saveStatusIndicator.classList.add('bg-red-100', 'text-red-800');
                saveStatusIndicator.classList.remove('bg-surface', 'text-primary');
            } else {
                saveStatusIndicator.classList.remove('bg-red-100', 'text-red-800');
                saveStatusIndicator.classList.add('bg-surface', 'text-primary');
            }
            // Clear status after 3 seconds if not unsaved
            if(message !== "Unsaved changes") {
                setTimeout(() => {
                    saveStatusIndicator.classList.add('hidden');
                }, 3000);
            }
        }

        function collectProjectState() {
            const state = {
                app: "SizeMatters.AI",
                version: "1.4.3",
                savedAt: new Date().toISOString(),
                metadata: {
                    projectName: metaProjectName ? metaProjectName.value : "",
                    productionCompany: metaCompany ? metaCompany.value : "",
                    shootingDay: metaShootingDay ? metaShootingDay.value : "",
                    location: metaLocation ? metaLocation.value : "",
                    notes: metaNotes ? metaNotes.value : ""
                },
                calculator: {
                    shootingHours: hoursSlider ? hoursSlider.value : 1,
                    cameras: []
                },
                backup: {
                    strategy: document.getElementById('backup-strategy-select') ? document.getElementById('backup-strategy-select').value : "1_copy",
                    customMultiplier: document.getElementById('backup-custom-multiplier') ? document.getElementById('backup-custom-multiplier').value : 1.5,
                    safetyMargin: document.getElementById('backup-safety-margin') ? document.getElementById('backup-safety-margin').value : 20
                },
                offload: {
                    sourceMedia: document.getElementById('source-media-select') ? document.getElementById('source-media-select').value : "cfexpress_b",
                    targetDrive: document.getElementById('target-drive-select') ? document.getElementById('target-drive-select').value : "ssd_sata"
                },
                cardRotation: {
                    camSelect: document.getElementById('sim-cam-select') ? document.getElementById('sim-cam-select').value : "",
                    cardCapacity: document.getElementById('sim-card-capacity') ? document.getElementById('sim-card-capacity').value : 512,
                    readersSelect: document.getElementById('sim-readers-select') ? document.getElementById('sim-readers-select').value : 1
                },
                projectStructure: {
                    cameraCount: document.getElementById('camera-count') ? document.getElementById('camera-count').value : 2,
                    includeSound: document.getElementById('include-sound') ? document.getElementById('include-sound').checked : true,
                    includeProxies: document.getElementById('include-proxies') ? document.getElementById('include-proxies').checked : true,
                    includeAssets: document.getElementById('include-assets') ? document.getElementById('include-assets').checked : false,
                    includeReports: document.getElementById('include-reports') ? document.getElementById('include-reports').checked : true,
                    includeDocs: document.getElementById('include-docs') ? document.getElementById('include-docs').checked : false,
                    nlePremiere: document.getElementById('nle-premiere') ? document.getElementById('nle-premiere').checked : true,
                    nleResolve: document.getElementById('nle-resolve') ? document.getElementById('nle-resolve').checked : true,
                    nleFcpx: document.getElementById('nle-fcpx') ? document.getElementById('nle-fcpx').checked : false,
                    includeColor: document.getElementById('include-color') ? document.getElementById('include-color').checked : false
                },
                shotlist: []
            };

            // Collect cameras
            const blocks = camerasContainer ? camerasContainer.querySelectorAll('.camera-block') : [];
            blocks.forEach(block => {
                const cam = block.querySelector('.cam-select').value || "";
                const codec = block.querySelector('.codec-select').value || "";
                const res = block.querySelector('.res-select').value || "";
                const fpsSelect = block.querySelector('.fps-select');
                const fpsText = (fpsSelect && fpsSelect.selectedIndex > 0) ? fpsSelect.options[fpsSelect.selectedIndex].text : "";
                state.calculator.cameras.push({ cam, codec, res, fps: fpsText });
            });

            // Collect shotlist
            const shotBlocks = document.getElementById('shotlist-container') ? document.getElementById('shotlist-container').querySelectorAll('.shot-block') : [];
            shotBlocks.forEach(block => {
                state.shotlist.push({
                    name: block.querySelector('.shot-name').value || "",
                    lens: block.querySelector('.shot-lens').value || "",
                    cameraIndex: block.querySelector('.shot-camera').selectedIndex,
                    duration: block.querySelector('.shot-duration').value || "",
                    takes: block.querySelector('.shot-takes').value || "1"
                });
            });

            return state;
        }

        function applyProjectState(data) {
            if (!data || data.app !== "SizeMatters.AI") {
                alert("Invalid project file.");
                return;
            }

            // Restore Metadata
            if (data.metadata) {
                if(metaProjectName) metaProjectName.value = data.metadata.projectName || "";
                if(structProjectName) structProjectName.value = data.metadata.projectName || "";
                if(metaCompany) metaCompany.value = data.metadata.productionCompany || "";
                if(metaShootingDay) metaShootingDay.value = data.metadata.shootingDay || "";
                if(structShootingDay) structShootingDay.value = data.metadata.shootingDay || "";
                if(metaLocation) metaLocation.value = data.metadata.location || "";
                if(metaNotes) metaNotes.value = data.metadata.notes || "";
            }

            // Restore Backup
            if (data.backup) {
                const s = document.getElementById('backup-strategy-select');
                if(s) s.value = data.backup.strategy || "1_copy";
                const cm = document.getElementById('backup-custom-multiplier');
                if(cm) cm.value = data.backup.customMultiplier || 1.5;
                const sm = document.getElementById('backup-safety-margin');
                if(sm) { sm.value = data.backup.safetyMargin || 20; }
                if(typeof updateBackupStrategyUI === 'function') updateBackupStrategyUI(parseInt(sm.value));
            }

            // Restore Offload
            if (data.offload) {
                const sm = document.getElementById('source-media-select');
                if(sm) sm.value = data.offload.sourceMedia || "cfexpress_b";
                const td = document.getElementById('target-drive-select');
                if(td) td.value = data.offload.targetDrive || "ssd_sata";
            }

            // Restore Card Rotation
            if (data.cardRotation) {
                const cs = document.getElementById('sim-cam-select');
                if(cs) cs.value = data.cardRotation.camSelect || "";
                const cc = document.getElementById('sim-card-capacity');
                if(cc) cc.value = data.cardRotation.cardCapacity || 512;
                const rs = document.getElementById('sim-readers-select');
                if(rs) rs.value = data.cardRotation.readersSelect || 1;
            }

            // Restore Project Structure
            if (data.projectStructure) {
                const cc = document.getElementById('camera-count'); if(cc) cc.value = data.projectStructure.cameraCount || 2;
                const is = document.getElementById('include-sound'); if(is) is.checked = !!data.projectStructure.includeSound;
                const ip = document.getElementById('include-proxies'); if(ip) ip.checked = !!data.projectStructure.includeProxies;
                const ia = document.getElementById('include-assets'); if(ia) ia.checked = !!data.projectStructure.includeAssets;
                const ir = document.getElementById('include-reports'); if(ir) ir.checked = !!data.projectStructure.includeReports;
                const idoc = document.getElementById('include-docs'); if(idoc) idoc.checked = !!data.projectStructure.includeDocs;
                const np = document.getElementById('nle-premiere'); if(np) np.checked = !!data.projectStructure.nlePremiere;
                const nr = document.getElementById('nle-resolve'); if(nr) nr.checked = !!data.projectStructure.nleResolve;
                const nf = document.getElementById('nle-fcpx'); if(nf) nf.checked = !!data.projectStructure.nleFcpx;
                const ic = document.getElementById('include-color'); if(ic) ic.checked = !!data.projectStructure.includeColor;
            }

            // Restore Calculator
            if (data.calculator) {
                if (hoursSlider) {
                    hoursSlider.value = data.calculator.shootingHours || 1;
                    if(document.getElementById('hours-display')) document.getElementById('hours-display').textContent = hoursSlider.value;
                }
                
                if (camerasContainer) {
                    camerasContainer.querySelectorAll('.camera-block').forEach(b => b.remove());
                }
                nextCameraId = 1;
                productionSetup = [];
                
                if (data.calculator.cameras && data.calculator.cameras.length > 0) {
                    data.calculator.cameras.forEach(camData => {
                        const id = nextCameraId++;
                        productionSetup.push({ id, gbPerHour: 0 });
                        const block = createCameraBlock(id);
                        camerasContainer.insertBefore(block, btnAddCamera);
                        setupCameraListeners(block, id);
                        
                        if (!camData.cam) return; // We still create the block, just skip filling it
                        
                        const camSelect = block.querySelector('.cam-select');
                        camSelect.value = camData.cam;
                        
                        // Manually trigger population of codec, res, fps
                        camSelect.dispatchEvent(new Event('change', { bubbles: true }));
                        
                        const codecSelect = block.querySelector('.codec-select');
                        if (camData.codec && codecSelect.querySelector(`option[value="${camData.codec}"]`)) {
                            codecSelect.value = camData.codec;
                            codecSelect.dispatchEvent(new Event('change', { bubbles: true }));
                        }
                        
                        const resSelect = block.querySelector('.res-select');
                        if (camData.res && resSelect.querySelector(`option[value="${camData.res}"]`)) {
                            resSelect.value = camData.res;
                            resSelect.dispatchEvent(new Event('change', { bubbles: true }));
                        }
                        
                        const fpsSelect = block.querySelector('.fps-select');
                        if (camData.fps) {
                            Array.from(fpsSelect.options).forEach(opt => {
                                if (opt.text === camData.fps) {
                                    opt.selected = true;
                                }
                            });
                            fpsSelect.dispatchEvent(new Event('change', { bubbles: true }));
                        }
                    });
                } else {
                    // No cameras, add one default block
                    if (camerasContainer) {
                        const id = nextCameraId++;
                        productionSetup.push({ id, gbPerHour: 0 });
                        const block = createCameraBlock(id);
                        camerasContainer.appendChild(block);
                        setupCameraListeners(block, id);
                    }
                }
            }
            
            // Restore Shotlist
            const shotlistContainerNode = document.getElementById('shotlist-container');
            if (data.shotlist && data.shotlist.length > 0 && shotlistContainerNode) {
                shotlistContainerNode.innerHTML = '';
                const btnAddShotNode = document.getElementById('btn-add-shot');
                if (btnAddShotNode) btnAddShotNode.classList.remove('hidden');
                
                data.shotlist.forEach(shot => {
                    const block = createShotBlock();
                    shotlistContainerNode.appendChild(block);
                    block.querySelector('.shot-name').value = shot.name || "";
                    block.querySelector('.shot-lens').value = shot.lens || "";
                    block.querySelector('.shot-duration').value = shot.duration || "";
                    block.querySelector('.shot-takes').value = shot.takes || "1";
                    const camSelect = block.querySelector('.shot-camera');
                    if (camSelect && camSelect.options.length > shot.cameraIndex) {
                        camSelect.selectedIndex = shot.cameraIndex;
                    }
                    if(typeof calculateShotGb === 'function') calculateShotGb(block);
                });
            } else if (shotlistContainerNode) {
                shotlistContainerNode.innerHTML = '';
                const btnAddShotNode = document.getElementById('btn-add-shot');
                if (btnAddShotNode) btnAddShotNode.classList.add('hidden');
            }

            // Final global recalculations
            if(typeof calculateStorage === 'function') calculateStorage();
            if(typeof updateProductionSetup === 'function') updateProductionSetup();
        }

        function saveProjectToLocalStorage() {
            const data = collectProjectState();
            localStorage.setItem('sizematters_project', JSON.stringify(data));
            const now = new Date();
            const timeStr = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
            setSaveStatus('Auto-saved at ' + timeStr);
        }

        function loadProjectFromLocalStorage() {
            const savedStr = localStorage.getItem('sizematters_project');
            if (savedStr) {
                try {
                    const data = JSON.parse(savedStr);
                    applyProjectState(data);
                    setSaveStatus('Project loaded.');
                } catch (e) {
                    console.error("Error loading project:", e);
                    setSaveStatus('Error loading project.', true);
                }
            } else {
                setSaveStatus('No saved project found.', true);
            }
        }

        let autoSaveTimer = null;
        function scheduleAutoSave() {
            setSaveStatus("Unsaved changes");
            if (autoSaveTimer) clearTimeout(autoSaveTimer);
            autoSaveTimer = setTimeout(() => {
                saveProjectToLocalStorage();
            }, 1500);
        }

        function exportProjectJSON() {
            const data = collectProjectState();
            const jsonStr = JSON.stringify(data, null, 2);
            const blob = new Blob([jsonStr], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            
            let pName = data.metadata.projectName ? data.metadata.projectName.replace(/[^a-zA-Z0-9]/g, '_') : 'Untitled';
            const d = new Date();
            const dateStr = d.toISOString().split('T')[0];
            const fileName = `SizeMatters_Project_${pName}_${dateStr}.json`;

            const a = document.createElement('a');
            a.href = url;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }

        function importProjectJSON(file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const data = JSON.parse(e.target.result);
                    applyProjectState(data);
                    saveProjectToLocalStorage(); // set it as the active local project
                    setSaveStatus('Project imported successfully.');
                } catch (err) {
                    alert('Invalid project file. Please import a valid SizeMatters.AI project.');
                }
            };
            reader.readAsText(file);
        }

        function resetProject() {
            if (confirm("Start a new project? Unsaved changes will be lost.")) {
                if(metaProjectName) metaProjectName.value = "";
                if(metaCompany) metaCompany.value = "";
                if(metaShootingDay) metaShootingDay.value = "";
                if(metaLocation) metaLocation.value = "";
                if(metaNotes) metaNotes.value = "";
                if(structProjectName) structProjectName.value = "";
                if(structShootingDay) structShootingDay.value = "";
                
                if (camerasContainer) {
                    camerasContainer.querySelectorAll('.camera-block').forEach(b => b.remove());
                }
                nextCameraId = 1;
                productionSetup = [];
                // add default empty block
                if (camerasContainer) {
                    const id = nextCameraId++;
                    productionSetup.push({ id, gbPerHour: 0 });
                    const block = createCameraBlock(id);
                    camerasContainer.insertBefore(block, btnAddCamera);
                    setupCameraListeners(block, id);
                }
                
                if (hoursSlider) {
                    hoursSlider.value = 1;
                    if(document.getElementById('hours-display')) document.getElementById('hours-display').textContent = '1';
                }
                
                const s = document.getElementById('backup-strategy-select'); if(s) s.value = "1_copy";
                const cm = document.getElementById('backup-custom-multiplier'); if(cm) cm.value = 1.5;
                const sm = document.getElementById('backup-safety-margin'); if(sm) sm.value = 20;
                
                if(typeof updateBackupStrategyUI === 'function') updateBackupStrategyUI(20);
                if(typeof calculateStorage === 'function') calculateStorage();
                if(typeof updateProductionSetup === 'function') updateProductionSetup();
                
                // Clear shotlist
                const shotlistContainerNode = document.getElementById('shotlist-container');
                if (shotlistContainerNode) shotlistContainerNode.innerHTML = '';
                const btnAddShotNode = document.getElementById('btn-add-shot');
                if (btnAddShotNode) btnAddShotNode.classList.add('hidden');

                // Clear structure preview
                const treeContainer = document.getElementById('tree-container');
                if(treeContainer) {
                    treeContainer.textContent = "Ready to generate structure...";
                    treeContainer.classList.add('structure-empty-state');
                    treeContainer.classList.add('flex', 'items-center', 'justify-center', 'text-center');
                    treeContainer.classList.remove('text-left');
                }
                
                // Clear sim results
                const simResults = document.getElementById('sim-results');
                if(simResults) simResults.classList.add('hidden');

                // Clear local storage completely? 
                // localStorage.removeItem('sizematters_project');
                // Or just auto-save the blank state
                saveProjectToLocalStorage();
                setSaveStatus('New project started.');
            }
        }

        // Random Audio Player for Save
        function playRandomWow() {
            const index = Math.floor(Math.random() * 7) + 1;
            const audio = new Audio(`mp3_assets/Wow_0${index}.mp3`);
            audio.play().catch(e => console.log("Audio play failed:", e));
        }

        // Event Listeners for Project Management
        if (btnSaveProject) {
            btnSaveProject.addEventListener('click', () => {
                saveProjectToLocalStorage();
                playRandomWow();
            });
        }
        if (btnLoadProject) btnLoadProject.addEventListener('click', loadProjectFromLocalStorage);
        if (btnExportProject) btnExportProject.addEventListener('click', exportProjectJSON);
        if (btnImportProject) {
            btnImportProject.addEventListener('change', (e) => {
                if (e.target.files.length > 0) {
                    importProjectJSON(e.target.files[0]);
                    e.target.value = ''; // reset
                }
            });
        }
        if (btnNewProject) btnNewProject.addEventListener('click', resetProject);

        // Attach Auto-Save to inputs globally
        document.body.addEventListener('input', (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') {
                scheduleAutoSave();
            }
        });
        document.body.addEventListener('change', (e) => {
            if (e.target.tagName === 'SELECT' || e.target.type === 'checkbox' || e.target.type === 'file') {
                if(e.target.id !== 'btn-import-project') {
                    scheduleAutoSave();
                }
            }
        });

        // Load project on startup
        const savedStr = localStorage.getItem('sizematters_project');
        if (savedStr) {
            try {
                const data = JSON.parse(savedStr);
                applyProjectState(data);
            } catch(e) {}
        }

        // ═══════════════════════════════════════════════════
        // VIEW 7: PRODUCER MODE (BUDGET & RISK)
        // ═══════════════════════════════════════════════════

        const inputCostPrimary = document.getElementById('cost-primary-ssd');
        const inputCostBackup = document.getElementById('cost-backup-hdd');
        const inputCostFast = document.getElementById('cost-fast-nvme');
        producerModeReady = true;

        // Add event listeners to inputs to update producer mode live
        [inputCostPrimary, inputCostBackup, inputCostFast].forEach(el => {
            if (el) el.addEventListener('input', () => {
                updateProducerMode();
                scheduleAutoSave(); // Save assumptions as well
            });
        });

        const btnCopyProducer = document.getElementById('btn-copy-producer');
        if (btnCopyProducer) {
            btnCopyProducer.addEventListener('click', (e) => {
                const text = generateProducerCopyText();
                navigator.clipboard.writeText(text).then(() => {
                    const originalHtml = btnCopyProducer.innerHTML;
                    btnCopyProducer.innerHTML = `<span class="material-symbols-outlined text-sm">check</span> Copied!`;
                    setTimeout(() => btnCopyProducer.innerHTML = originalHtml, 2000);
                });
            });
        }

        function collectProducerContext() {
            return {
                totalGB: globalTotalGB || 0,
                protectedGB: globalProtectedGB || 0,
                margin: globalSafetyMargin || 0,
                multiplier: globalBackupMultiplier || 1,
                offloadSeconds: globalOffloadTimeSeconds || 0,
                percentFill: globalPercentFill || 0,
                recommendedDrive: globalRecommendedDrive || "None",
                cameraCount: productionSetup.filter(c => c.gbPerHour > 0).length,
                hours: hoursSlider ? parseInt(hoursSlider.value) : 1,
                hasStructure: !!document.getElementById('tree-container')?.textContent,
                hasShotlist: document.getElementById('shotlist-container') && document.getElementById('shotlist-container').children.length > 0,
                costPrimary: parseFloat(inputCostPrimary?.value) || 80,
                costBackup: parseFloat(inputCostBackup?.value) || 35,
                costFast: parseFloat(inputCostFast?.value) || 120
            };
        }

        function calculateProducerCosts(ctx) {
            const minCost = (ctx.totalGB / 1024) * ctx.costPrimary;
            const recCost = (ctx.protectedGB / 1024) * ctx.costPrimary;
            const safeCost = recCost * 1.2;
            return { minCost, recCost, safeCost };
        }

        function calculateProducerRisk(ctx) {
            let riskPoints = 0;
            let reasons = [];
            
            if (ctx.cameraCount === 0) {
                return { level: "Not Enough Data", reasons: ["Add at least one camera setup and shooting hours to generate a risk overview."], points: 0 };
            }

            if (ctx.multiplier === 1) {
                riskPoints += 3;
                reasons.push("Critical: No backup copies planned. High risk of data loss.");
            }
            if (ctx.margin < 10) {
                riskPoints += 1;
                reasons.push("Warning: Safety margin is below 10%. Overtime or extra takes could cause storage to run out.");
            }
            if (ctx.percentFill > 85) {
                riskPoints += 1;
                reasons.push("Warning: Storage is too tight (over 85% full). Production should budget for larger or additional drives.");
            }
            // Basic bottleneck check based on hours/seconds
            // If total offload takes longer than 1/4 of the shoot day, it's slow
            const shootSeconds = ctx.hours * 3600;
            if (ctx.offloadSeconds > shootSeconds * 0.25) {
                riskPoints += 1;
                reasons.push("Warning: Transfers may take longer than expected, which can delay wrap or slow down DIT workflows.");
            }
            if (!ctx.hasStructure || !ctx.hasShotlist) {
                reasons.push("Notice: Folders or shotlists are missing, which might cause disorganization on set.");
            }

            let level = "Low";
            if (riskPoints >= 3) level = "Critical";
            else if (riskPoints == 2) level = "High";
            else if (riskPoints == 1) level = "Medium";

            if (reasons.length === 0) reasons.push("No major risks detected. Workflow looks safe.");

            return { level, reasons, points: riskPoints };
        }

        function formatTB(gb) {
            if (gb === 0) return "0 TB";
            return (gb / 1024).toFixed(2) + " TB";
        }

        function calculateScenarioImpact(ctx) {
            const avgGbPerHour = ctx.cameraCount > 0 ? (ctx.totalGB / ctx.hours) / ctx.cameraCount : 0;
            
            // Add 1 Cam
            const camAddedTotal = ctx.totalGB + (avgGbPerHour * ctx.hours);
            const camAddedProtected = camAddedTotal * ctx.multiplier * (1 + ctx.margin / 100);
            
            // Add 1 Hour
            const hourAddedTotal = ctx.totalGB + (avgGbPerHour * ctx.cameraCount);
            const hourAddedProtected = hourAddedTotal * ctx.multiplier * (1 + ctx.margin / 100);

            // Safer backup
            let saferProtected = ctx.protectedGB;
            if (ctx.multiplier < 3 || ctx.margin < 20) {
                saferProtected = ctx.totalGB * 3 * 1.2;
            }

            return {
                addCam: {
                    gb: camAddedProtected - ctx.protectedGB,
                    cost: ((camAddedProtected - ctx.protectedGB) / 1024) * ctx.costPrimary
                },
                addHour: {
                    gb: hourAddedProtected - ctx.protectedGB,
                    cost: ((hourAddedProtected - ctx.protectedGB) / 1024) * ctx.costPrimary
                },
                saferBackup: {
                    gb: saferProtected > ctx.protectedGB ? saferProtected - ctx.protectedGB : 0,
                    cost: saferProtected > ctx.protectedGB ? ((saferProtected - ctx.protectedGB) / 1024) * ctx.costPrimary : 0
                }
            };
        }

        function generateProducerRecommendations(ctx, risk) {
            let recs = [];
            if (ctx.cameraCount === 0) return ["Configure at least one camera."];

            recs.push(`Approve budget for approximately ${formatTB(ctx.protectedGB)} of storage before the shoot.`);
            
            if (ctx.multiplier === 1) {
                recs.push("URGENT: Purchase backup drives immediately. A 1-copy workflow is not professional standard.");
            } else if (ctx.multiplier < 3) {
                recs.push("Consider adding a 3rd offsite backup copy for maximum insurance.");
            }

            if (ctx.margin < 15) {
                recs.push("Increase the safety margin to 20% to avoid last-minute storage emergencies on set.");
            }
            
            const shootSeconds = ctx.hours * 3600;
            if (ctx.offloadSeconds > shootSeconds * 0.2) {
                recs.push("Use faster destination drives (like NVMe SSDs) to reduce offload delays and avoid overtime for the DIT.");
            }

            if (!ctx.hasStructure) {
                recs.push("Generate and approve the project folder structure before the shooting day.");
            }

            return recs;
        }

        function updateProducerMode() {
            const ctx = collectProducerContext();

            // DOM Elements
            const elReqStore  = document.getElementById('prod-required-storage');
            const elRecCap    = document.getElementById('prod-rec-capacity');
            const elEstCost   = document.getElementById('prod-est-cost');
            const elRisk      = document.getElementById('prod-workflow-risk');
            const elRiskCard  = document.getElementById('prod-risk-card');
            const elOffload   = document.getElementById('prod-offload-impact');
            const elStatus    = document.getElementById('prod-status');

            if (ctx.cameraCount === 0 || ctx.totalGB === 0) {
                if(elReqStore) elReqStore.textContent = "0 TB";
                if(elRecCap)   elRecCap.textContent   = "0 TB";
                if(elEstCost)  elEstCost.textContent  = "$0";
                if(elRisk)     elRisk.textContent     = "N/A";
                if(elOffload)  elOffload.textContent  = "N/A";
                if(elStatus) {
                    elStatus.textContent = "Not Enough Data";
                    elStatus.className   = "producer-status-chip";
                }
                if(elRiskCard) elRiskCard.className = "producer-metric-card";

                if(document.getElementById('prod-min-cost')) document.getElementById('prod-min-cost').textContent = "$0";
                if(document.getElementById('prod-rec-cost')) document.getElementById('prod-rec-cost').textContent = "$0";
                if(document.getElementById('prod-safe-cost')) document.getElementById('prod-safe-cost').textContent = "$0";

                const emptyScenario = '<p class="producer-scenario-empty">No data.</p>';
                if(document.getElementById('scenario-add-cam'))    document.getElementById('scenario-add-cam').innerHTML    = emptyScenario;
                if(document.getElementById('scenario-add-hour'))   document.getElementById('scenario-add-hour').innerHTML   = emptyScenario;
                if(document.getElementById('scenario-safe-backup'))document.getElementById('scenario-safe-backup').innerHTML = emptyScenario;

                if(document.getElementById('prod-summary-text')) document.getElementById('prod-summary-text').textContent = "Please configure the calculator to see the production summary.";
                const ul = document.getElementById('prod-recommendations');
                if (ul) ul.innerHTML = '<li class="producer-rec-item">Configure at least one camera.</li>';

                const riskReasons = document.getElementById('prod-risk-reasons');
                if(riskReasons) riskReasons.innerHTML = `
                    <div class="flex flex-col items-center justify-center h-full opacity-40 text-center py-8">
                        <span class="material-symbols-outlined text-5xl mb-3">analytics</span>
                        <p class="text-sm">Add at least one camera and shooting hours to generate a risk overview.</p>
                    </div>`;
                return;
            }

            const costs     = calculateProducerCosts(ctx);
            const risk      = calculateProducerRisk(ctx);
            const scenarios = calculateScenarioImpact(ctx);

            // ── KPI values ───────────────────────────────────────────
            if(elReqStore) elReqStore.textContent = formatTB(ctx.protectedGB);
            if(elRecCap)   elRecCap.textContent   = ctx.recommendedDrive;
            if(elEstCost)  elEstCost.textContent  = "$" + Math.round(costs.recCost).toLocaleString();

            // ── Offload impact label ─────────────────────────────────
            const shootSeconds = ctx.hours * 3600;
            if(elOffload) {
                if (ctx.offloadSeconds > shootSeconds * 0.3)       elOffload.textContent = "Slow";
                else if (ctx.offloadSeconds > shootSeconds * 0.15) elOffload.textContent = "Manageable";
                else                                                elOffload.textContent = "Fast";
            }

            // ── Risk chip & card ─────────────────────────────────────
            if(elRisk) elRisk.textContent = risk.level;
            if(elRiskCard) {
                let riskClass = "producer-metric-card ";
                if      (risk.level === "Critical") riskClass += "producer-risk-critical";
                else if (risk.level === "High")     riskClass += "producer-risk-high";
                else if (risk.level === "Medium")   riskClass += "producer-risk-medium";
                else                                riskClass += "producer-risk-low";
                elRiskCard.className = riskClass;
            }

            // ── Status chip ──────────────────────────────────────────
            if(elStatus) {
                let statusLabel = "Ready";
                let statusClass = "producer-status-chip producer-status-ready";
                if      (risk.level === "Critical") { statusLabel = "High Risk";      statusClass = "producer-status-chip producer-status-critical"; }
                else if (risk.level === "High")     { statusLabel = "Needs Review";   statusClass = "producer-status-chip producer-status-high"; }
                else if (risk.level === "Medium")   { statusLabel = "Minor Warnings"; statusClass = "producer-status-chip producer-status-medium"; }
                elStatus.textContent = statusLabel;
                elStatus.className   = statusClass;
            }

            // ── Costs ────────────────────────────────────────────────
            if(document.getElementById('prod-min-cost'))  document.getElementById('prod-min-cost').textContent  = "$" + Math.round(costs.minCost).toLocaleString();
            if(document.getElementById('prod-rec-cost'))  document.getElementById('prod-rec-cost').textContent  = "$" + Math.round(costs.recCost).toLocaleString();
            if(document.getElementById('prod-safe-cost')) document.getElementById('prod-safe-cost').textContent = "$" + Math.round(costs.safeCost).toLocaleString();

            // ── Risk reasons ─────────────────────────────────────────
            const riskContainer = document.getElementById('prod-risk-reasons');
            if (riskContainer) {
                riskContainer.innerHTML = risk.reasons.map(r =>
                    `<div class="producer-risk-reason">
                        <span class="material-symbols-outlined" style="font-size:1rem;color:#ff9966;flex-shrink:0;">warning</span>
                        <span>${r}</span>
                    </div>`
                ).join('');
            }

            // ── Scenarios ────────────────────────────────────────────
            const scenarioHtml = (gb, cost) => `
                <div class="producer-scenario-delta">
                    <span class="producer-scenario-storage">+ ${formatTB(gb)}</span>
                    <span class="producer-scenario-cost">+ $${Math.round(cost).toLocaleString()}</span>
                </div>`;

            if(document.getElementById('scenario-add-cam')) {
                document.getElementById('scenario-add-cam').innerHTML = scenarioHtml(scenarios.addCam.gb, scenarios.addCam.cost);
            }
            if(document.getElementById('scenario-add-hour')) {
                document.getElementById('scenario-add-hour').innerHTML = scenarioHtml(scenarios.addHour.gb, scenarios.addHour.cost);
            }
            if(document.getElementById('scenario-safe-backup')) {
                if (scenarios.saferBackup.gb > 0) {
                    document.getElementById('scenario-safe-backup').innerHTML = scenarioHtml(scenarios.saferBackup.gb, scenarios.saferBackup.cost);
                } else {
                    document.getElementById('scenario-safe-backup').innerHTML = `<p class="producer-scenario-ok">✓ Already using safe backup workflow.</p>`;
                }
            }

            // ── Summary & Recommendations ────────────────────────────
            if(document.getElementById('prod-summary-text')) {
                let concern = "workflow looks solid";
                if (risk.level === "Critical" || risk.level === "High") {
                    concern = "there are significant workflow risks that should be addressed before shooting";
                } else if (risk.level === "Medium") {
                    concern = "there are minor workflow warnings to consider";
                }
                document.getElementById('prod-summary-text').textContent = `Based on the current ${ctx.cameraCount}-camera setup, production should plan for approximately ${formatTB(ctx.protectedGB)} of protected storage. The estimated storage cost is $${Math.round(costs.recCost).toLocaleString()}. Overall, the ${concern}.`;
            }

            const ul = document.getElementById('prod-recommendations');
            if (ul) {
                const recs = generateProducerRecommendations(ctx, risk);
                ul.innerHTML = recs.map(r => `<li class="producer-rec-item">${r}</li>`).join('');
            }
        }

        function generateProducerCopyText() {
            const ctx = collectProducerContext();
            if (ctx.cameraCount === 0) return "No production data configured.";
            
            const costs = calculateProducerCosts(ctx);
            const risk = calculateProducerRisk(ctx);
            
            let text = `PRODUCER MODE SUMMARY\n`;
            text += `--------------------------------------\n`;
            text += `Required Storage: ${formatTB(ctx.protectedGB)}\n`;
            text += `Estimated Storage Cost: $${Math.round(costs.recCost).toLocaleString()}\n`;
            text += `Recommended Capacity: ${ctx.recommendedDrive}\n`;
            text += `Workflow Risk: ${risk.level}\n\n`;
            text += `Main Concerns:\n`;
            risk.reasons.forEach(r => text += `- ${r}\n`);
            text += `\nRecommendations:\n`;
            const recs = generateProducerRecommendations(ctx, risk);
            recs.forEach(r => text += `- ${r}\n`);
            
            return text;
        }

        // Initialize producer mode
        window.addEventListener('DOMContentLoaded', () => {
            updateProducerMode();
        });
