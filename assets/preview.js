let skinViewer = new skinview3d.SkinViewer({
    canvas: document.getElementById("skin_container"),
    width: 1024,
    height: 1024
});

skinViewer.loadCape("../cape.png");
skinViewer.fov = 65;

skinViewer.loadSkin("../skin2.png");

skinViewer.camera.rotation.z = -3.05
skinViewer.camera.rotation.y = -0.5
skinViewer.camera.rotation.x = -3.025
skinViewer.camera.position.z = -30
skinViewer.camera.position.y = 2.75
skinViewer.camera.position.x = -15
