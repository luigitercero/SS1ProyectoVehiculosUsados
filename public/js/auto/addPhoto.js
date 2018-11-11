
/*obtener valores de los elementos que se utilizan para subir una imagen*/

var fileButton = document.getElementById('fileButton');
/**
 * vigila seleccion de archivo
*/
"use strict";
fileButton.addEventListener('change', function (e) {
    //obtener el archivo
    console.log("hola subiendo archivo" + e.target.files[0]);
    /*
    var file = e.target.files[0];

    //crer una referencia al storage de firebase
    var storageRef = firebase.storage().ref('myPhotos/' + file.name);

    //subir archivo
    var task = storageRef.put(file);


    task.on('state_changed',
        function progress(snapshot) {
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            uploader.value = percentage;
            console.log(snapshot);
        },
        function error(err) {

        },
        function complete() {
            console.log("hola");
            task.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                console.log('File available at', downloadURL);
            });

            console.log("adios");
        }
    )*/
})