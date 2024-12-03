async function listarVideos(){
    const conexion = await fetch("http://localhost:3001/videos")

    const conexionConvertida = conexion.json();

    //console.log(conexionConvertida);
    return conexionConvertida
}

async function enviarVideo(titulo,descripcion,url,imagem){
    const conexion = await fetch("http://localhost:3001/videos",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            titulo,
            descripcion:`${descripcion} mil visualizaciones`,
            url,
            imagem
        })
    })

    const conexionConvertida = conexion.json();

    if(!conexion.ok){
        throw new Error("Ha ocurrido un error al enviar el video");
    }

    return conexionConvertida;
}

async function buscarVideos(palabraClave){
    const conexion = await fetch(`http://localhost:3001/videos?q=${palabraClave}`)
    const conexionConvertida = conexion.json();

    return conexionConvertida
}

export const conexionAPI = {
    listarVideos, enviarVideo , buscarVideos
}

//listarVideos();