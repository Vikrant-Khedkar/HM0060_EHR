import React, {Component, useEffect, useRef} from 'react';
import ModelViewer from '@metamask/logo';

// class MetamaskLogo extends Component {
//     ComponentDidMount() {
//         this.viewer = ModelViewer({
//             pxNotRation: true,
//             width: 200,
//             height: 200,
//             followMouse : true
//         });
//         this.el.appendChild(this.viewer.container);
//     }

//     componentWillUnmount() {
//         this.viewer.stopAnimation();
//     }

//     render() {
//         return (
//             <div ref={el => {this.el = el}} 
//                 style={{position:'absolute',zIndex: '1000'}}
//             />
//         )
//     }
// }

// export default MetamaskLogo;

export default function MetamaskLogo() {

    const el = useRef();

    useEffect(() => {
        const viewer = ModelViewer({
            pxNotRatio : true,
            width: 500+'px',
            height: 500+'px',
            followMouse: true,
        });
        el.current = viewer.container;

        return(() => {
            viewer.stopAnimation();
        })
    },[])

    return (
        <div style={{}}>

        </div>
    )
}