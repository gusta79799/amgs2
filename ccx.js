function login(){

    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if(usuario == "destruição" && senha == "uvitu") {
        document.getElementById("mensagem").style.color = "green";1234
        document.getElementById("mensagem").innerText = "Login realizado com sucesso!";
        
        window.location.href = "https://drive.google.com/uc?export=view&id=17vOCfwC3kbP5o3m_0nDaAOMRPQb03tpM";
    }
 
    else {
        document.getElementById("mensagem").style.color = "red";
        document.getElementById("mensagem").innerText = "Usuário ou senha incorreta, tente novamente";
    }

}

icon.addEventListener("click", () => {
    const isPassword = senha.type == "password";

    senha.type = isPassword ? "text" : "password";
    icon.textContent = isPassword ? "👁️" : "👁️‍🗨️";
});

let player;
let somLigado = false;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('bg-video', {
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  event.target.mute();
}

function toggleSom() {
  if (!player) return;

  if (somLigado) {
    player.mute();
    document.getElementById("btnSom").innerText = "🔇";
  } else {
    player.unMute();
    document.getElementById("btnSom").innerText = "🔊";
  }

  somLigado = !somLigado;
}
