import React, { useEffect } from 'react';
import ModelViewer from '@metamask/logo';
import styles from './styles.module.css';

const MetaMaskLogo = () => {

    useEffect(() => {
        // Create ModelViewer instance
        const viewer = ModelViewer({
            pxNotRatio: false,
            width: '100%',
            height: 'auto',
            followMouse: false,
            slowDrift: false,
        });

        // Get the container element
        const container = document.getElementById('logo-container');

        // Add viewer to the DOM
        container.appendChild(viewer.container);

        // Look at something on the page
        viewer.lookAt({
            x: 0,
            y: 0,
        });

        // Enable mouse follow
        viewer.setFollowMouse(true);

        // Deallocate resources
        return () => {
            viewer.stopAnimation();
            container.removeChild(viewer.container);
        };
    }, []);

    return <div id="logo-container" className={styles.metamaskLogoCont} />;
};

export default MetaMaskLogo;
