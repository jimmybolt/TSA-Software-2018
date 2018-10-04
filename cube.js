function newCube(){
    document.getElementById("sideBarBoxEdit").style.display="inherit";
    document.getElementById("sideBarList").style.display="none";
    var newGeometry = new THREE.BoxGeometry(1,1,1);
    var color = getRandomColor();
    var newMaterial = new THREE.MeshBasicMaterial({color: color})
    shapes[shapes.length]=new THREE.Mesh(newGeometry, newMaterial);
    var length = scales.length;
    scales[length]=[];
    scales[length][0]=1;
    scales[length][1]=1;
    scales[length][2]=1;
    scene.add(shapes[shapes.length-1]);
    shapes[length].rotation.x = shapes[0].rotation.x;
    shapes[length].rotation.y = shapes[0].rotation.y;
    shapes[length].rotation.z = shapes[0].rotation.z;
    selectedShape++;
    setSelectedShape(selectedShape);
}
function cubeDimension(dimension,value){

    switch(dimension){
        case "x":
            scales[selectedShape][0]=value;
            break;
        case "y":
            scales[selectedShape][1]=value;
            break;
        case "z":
            scales[selectedShape][2]=value;
            break;
    }
}
function moveShape(dimension, value){
    switch(dimension){
        case "x":
            shapes[selectedShape].position.x = value;
            break;
        case "y":
            shapes[selectedShape].position.y = value;
            break;
        case "z":
            shapes[selectedShape].position.z = value;
            break;
    }
}
function removeCube(){
    scene.remove(shapes[selectedShape]);
    shapes.splice(selectedShape,1);
    scales.splice(selectedShape,1);
    selectedShape--;
    setSelectedShape(selectedShape);
}