import React, { useEffect } from 'react';
import Globe from 'globe.gl';

const GlobeComponent = () => {
  useEffect(() => {
    const globeElement = document.getElementById('globe');
    const globe = Globe()(globeElement)
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
      .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
      .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
      .showAtmosphere(true)
      .atmosphereColor('lightgreen')
      .atmosphereAltitude(0.25)
      .rotateY(0.005);

    const animate = () => {
      globe.controls().update();
      globe.rotateY(0.005);
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return <div id="globe" style={{ width: '100%', height: '100vh' }} />;
};

export default GlobeComponent;
