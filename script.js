var resumebtn = false;
function resumefunction() {
    if (resumebtn) {
        document.getElementsByClassName('resumo')[0].style.height = '500px';
        document.getElementsByClassName('resumo')[0].style.transition = 'transform 0.6s';
    }
    else {
        document.getElementsByClassName('resumo')[0].style.height = '189px';
    }
    resumebtn = !resumebtn;
}

var criartopicobtn = false;
function criarTopicoFunction(){
    if (criartopicobtn){
        document.getElementsByClassname('')
    }

}
function trocar() {
    let filho = document.getElementById("filho");
    const parente = document.getElementById("pai");

    if (parente) {
        parente.removeChild(filho);

        let novoFilho = criarFilho();
        parente.appendChild(novoFilho);
       
    }
    filho = document.getElementById("sobrinho");
    filho.style.height = '800px';
}

function criarFilho() {
    return document.createRange().createContextualFragment(`<div class="discussoes" id="sobrinho">
    <div class="painel-discussoes">
        <h2>Discussões</h2>
    </div>
    <div class="container-discussoes-pagina-extra">
        <P>Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!</P><BR>
        <h4>Assunto</h4>
        <textarea name="" id="txt-assunto" cols="30"
            rows="10">Defina um tópico sucinto para notificar os autores...</textarea>
        <h4>Conteúdo</h4>
        <div class="txt-container">
            <textarea name="" id="txt-conteudo" cols="30" rows="10"></textarea>
            <div class="div-botao-enviar-topico">
                <button onclick ='trocarSobrinho()'>
                    <p>Enviar</p>
                </button>
            </div>
        </div>
        <div class="divisoria" id="divisoria-pagina-extra"></div>
    </div>

    <div class="topico">
        <div class="card-header">
            <h4>Assunto da pergunta aparece aqui</h4>
            <p>Carlos Henrique Santos</p><br>
        </div>
        <div class="card-body">
            <p>Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da
                dimensão
                e impacto de processo formativo situado impacto de processo formativo processo...</p>
        </div>
        <div class="card-footer">
            <button class="cf-button-options">
                <img src="./img/mais informações.png">
            </button>
            <button class="cf-button-like">
                <img src="./img/green apples 22.png">
            </button>
            <p>likes</p>
            <p>resposta</p>
        </div>
    </div>

    <div class="topico" >
        <div class="card-header">
            <h4>Assunto da pergunta aparece aqui</h4>
            <p>Carlos Henrique Santos</p><br>
        </div>
        <div class="card-body">
            <p>Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da
                dimensão
                e impacto de processo formativo situado impacto de processo formativo processo...</p>
        </div>
        <div class="card-footer">
            <button class="cf-button-options">
                <img src="./img/mais informações.png">
            </button>
            <button class="cf-button-like">
                <img src="./img/green apples 22.png">
            </button>
            <p>likes</p>
            <p>resposta</p>
        </div>
    </div>
</div>`);
}

var criartopicobtn = false;
function registroConcluidoFunction(){
    if (criartopicobtn){
        document.getElementsByClassname('')
    }

}
function trocarSobrinho() {
    const filho = document.getElementById("sobrinho");
    const parente = document.getElementById("pai");

    if (parente) {
        parente.removeChild(filho);

        let novoFilho = criarSobriho();
        parente.appendChild(novoFilho);
       
    }
}

function criarSobriho() {
    return document.createRange().createContextualFragment(`<div class="discussoes" id="discussoes-topico-criado">
    <div class="painel-discussoes">
        <h2>Discussões</h2>
    </div>
    <div class="container-discussoes-topico-criado">
        <h2>Seu tópico foi enviado com sucesso! :D</h2><br>
        <p>Agradecemos por sua contribuição, uma notificação será enviada ao seu email assim que seu tópico for
            respondido!
        <p>
        <H4>Descubra outros trabalhos!</H4>
    </div>

    <div class="divisoria" id="divisoria-pagina-topico-criado">
        <button id="button-novo-topico" onclick="trocar2()">
            <p>Criar novo tópico</p>
        </button>
    </div>
    <div class="blur-registro-concluido">
        <div class="topico" id="topico-blur">
            <div class="card-header">
                <h4>Assunto da pergunta aparece aqui</h4>
                <p>Carlos Henrique Santos</p><br>
            </div>
            <div class="card-body">
                <p>Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da
                    dimensão
                    e impacto de processo formativo situado impacto de processo formativo processo...</p>
            </div>
            <div class="card-footer">
                <button class="cf-button-options">
                    <img src="./img/mais informações.png">
                </button>
                <button class="cf-button-like">
                    <img src="./img/green apples 22.png">
                </button>
                <p>likes</p>
                <p>resposta</p>
            </div>
        </div>
        <div class="divblur">
            <div class="escrita-div-blur" id="teste">
                <img src="./img/vistoduplo.png" alt="">
                <h2 id="h2Blur">Aguardando feedback dos autores</h2>
                <p id="pBlur">Aguardando feedback dos autores</p>
            </div>
        </div>
    </div>
    <div class="divblur"></div>
    <div class="topico">
        <div class="card-header">
            <h4>Assunto da pergunta aparece aqui</h4>
            <p>Carlos Henrique Santos</p><br>
        </div>
        <div class="card-body">
            <p>Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da
                dimensão
                e impacto de processo formativo situado impacto de processo formativo processo...</p>
        </div>
        <div class="card-footer">
            <button class="cf-button-options">
                <img src="./img/mais informações.png">
            </button>
            <button class="cf-button-like">
                <img src="./img/green apples 22.png">
            </button>
            <p>likes</p>
            <p>resposta</p>
        </div>
    </div>

    <div class="topico">
        <div class="card-header">
            <h4>Assunto da pergunta aparece aqui</h4>
            <p>Carlos Henrique Santos</p><br>
        </div>
        <div class="card-body">
            <p>Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da
                dimensão
                e impacto de processo formativo situado impacto de processo formativo processo...</p>
        </div>
        <div class="card-footer">
            <button class="cf-button-options">
                <img src="./img/mais informações.png">
            </button>
            <button class="cf-button-like">
                <img src="./img/green apples 22.png">
            </button>
            <p>likes</p>
            <p>resposta</p>
        </div>
    </div>
</div>`);
}

function trocar2() {
    const filho = document.getElementById("discussoes-topico-criado");
    const parente = document.getElementById("pai");

    if (parente) {
        parente.removeChild(filho);

        let novoFilho = criarFilho();
        parente.appendChild(novoFilho);
       
    }
}

function criarFilho2() {
    return document.createRange().createContextualFragment(`<div class="discussoes" id="sobrinho">
    <div class="painel-discussoes">
        <h2>Discussões</h2>
    </div>
    <div class="container-discussoes-pagina-extra">
        <P>Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!</P><BR>
        <h4>Assunto</h4>
        <textarea name="" id="txt-assunto" cols="30"
            rows="10">Defina um tópico sucinto para notificar os autores...</textarea>
        <h4>Conteúdo</h4>
        <div class="txt-container">
            <textarea name="" id="txt-conteudo" cols="30" rows="10"></textarea>
            <div class="div-botao-enviar-topico">
                <button onclick ='trocarSobrinho()'>
                    <p>Enviar</p>
                </button>
            </div>
        </div>
        <div class="divisoria" id="divisoria-pagina-extra"></div>
    </div>

    <div class="topico">
        <div class="card-header">
            <h4>Assunto da pergunta aparece aqui</h4>
            <p>Carlos Henrique Santos</p><br>
        </div>
        <div class="card-body">
            <p>Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da
                dimensão
                e impacto de processo formativo situado impacto de processo formativo processo...</p>
        </div>
        <div class="card-footer">
            <button class="cf-button-options">
                <img src="./img/mais informações.png">
            </button>
            <button class="cf-button-like">
                <img src="./img/green apples 22.png">
            </button>
            <p>likes</p>
            <p>resposta</p>
        </div>
    </div>

    <div class="topico">
        <div class="card-header">
            <h4>Assunto da pergunta aparece aqui</h4>
            <p>Carlos Henrique Santos</p><br>
        </div>
        <div class="card-body">
            <p>Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da
                dimensão
                e impacto de processo formativo situado impacto de processo formativo processo...</p>
        </div>
        <div class="card-footer">
            <button class="cf-button-options">
                <img src="./img/mais informações.png">
            </button>
            <button class="cf-button-like">
                <img src="./img/green apples 22.png">
            </button>
            <p>likes</p>
            <p>resposta</p>
        </div>
    </div>
</div>`);
}   

function trocarComentarios() {
    let filho = document.getElementById("filho");
    const parente = document.getElementById("pai");
      
    if (parente) {
        parente.removeChild(filho);

        let novoFilho = criarComent();
        parente.appendChild(novoFilho);
       
    }
    filho = document.getElementById("filho");
    filho.style.height = '1200px';
}

function criarComent() {
    
    return document.createRange().createContextualFragment(`
    <div class="discussoes" id="filho">
        <div class="painel-discussoes">
            <h2>Discussões</h2>
        </div>
        <div class="criarTopico">
            <div class="div-titulo-topico">
                <h2>Compartilhe suas ideias ou dúvidas com os autores!</h2>
            </div>
            <div class="div-icones-topico">
                <img src="./img/icone1.png">
                <img class="espaco-icones" src="./img/icone2.png">
                <img src="./img/icone3.png">
            </div>
            <div class="div-p-topico">
                <p>Sabia que o maior estímulo no desenvolvimento científico e cultural é a curiosidade?
                    Deixe
                    seus<br>
                    questionamentos ou sugestões para o autor!</p>
            </div>

            <div class="divisoria">
                <button type="button" onclick="trocar()">
                    <img src="./img/icon - criar.png">
                    <p>criar tópico</p>
                </button>
            </div>

            <div class="topico">
                <div class="card-header">
                    <h4>Assunto da pergunta aparece aqui</h4>
                    <p>Carlos Henrique Santos</p><br>
                </div>
                <div class="card-body">
                    <p>Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da
                        dimensão
                        e impacto de processo formativo situado impacto de processo formativo processo...</p>
                </div>
                <div class="card-footer">
                    <button class="cf-button-options">
                        <img src="./img/mais informações.png">
                    </button>
                    <button class="cf-button-like">
                        <img src="./img/green apples 22.png">
                    </button>
                    <p>likes</p>
                    <p>resposta</p>
                </div>
            </div>

            <div class="topico">
                <div class="card-header">
                    <h4>Assunto da pergunta aparece aqui</h4>
                    <p>Carlos Henrique Santos</p><br>
                </div>
                <div class="card-body">
                    <p>Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da
                        dimensão
                        e impacto de processo formativo situado impacto de processo formativo processo...</p>
                </div>
                <div class="card-footer" id="p-coment">
                    <button class="cf-button-options">
                        <img src="./img/mais informações.png">
                    </button>
                    <button class="cf-button-like">
                        <img src="./img/green apples 22.png">
                    </button>
                    <p>4 likes</p>
                    <p>4 respostas</p>
                </div>
            </div>
            <div class="resposta-container">
            <div class="resposta1"></div>
            <div class="resposta2">
                <div id="conainer-resposta-aberta">
                    <h4>Carlos Henrique</h4>
                    <p>Consegui entender melhor agora! Parece que a variação da análise da dimensão e impacto de
                        processo
                        formativo situado impacto de processo formativo.

                        Obrigada pela resposta, muito interessante o seu trabalho! </p>
                </div>
            </div>
            <div class="resposta3"></div>
            <div class="resposta4"></div>
            </div>
        </div>
    </div>
`);

}