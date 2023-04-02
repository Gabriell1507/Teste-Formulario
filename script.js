function validarSenha() {
    const senhaInput = document.getElementById("senha");
    const senhaErro = document.getElementById("senhaErro");
    const senha = senhaInput.value;
    
    if (senha.length < 7 || !/[A-Z]/.test(senha)) {
      senhaInput.style.borderColor = "red";
      senhaErro.textContent = "A senha deve ter pelo menos 7 caracteres e pelo menos uma letra maiúscula.";
      senhaInput.focus();
    } else {
      senhaInput.style.borderColor = "green";
      senhaErro.textContent = "";
    }
  }
  
  function mostrarSenha() {
    const senhaInput = document.getElementById("senha");
    if (senhaInput.type === "password") {
      senhaInput.type = "text";
    } else {
      senhaInput.type = "password";
    }
  }

  const estados = [
    { nome: "Acre", sigla: "AC" },
    { nome: "Alagoas", sigla: "AL" },
    { nome: "Amapá", sigla: "AP" },
    { nome: "Amazonas", sigla: "AM" },
    { nome: "Bahia", sigla: "BA" },
    { nome: "Ceará", sigla: "CE" },
    { nome: "Distrito Federal", sigla: "DF" },
    { nome: "Espírito Santo", sigla: "ES" },
    { nome: "Goiás", sigla: "GO" },
    { nome: "Maranhão", sigla: "MA" },
    { nome: "Mato Grosso", sigla: "MT" },
    { nome: "Mato Grosso do Sul", sigla: "MS" },
    { nome: "Minas Gerais", sigla: "MG" },
    { nome: "Pará", sigla: "PA" },
    { nome: "Paraíba", sigla: "PB" },
    { nome: "Paraná", sigla: "PR" },
    { nome: "Pernambuco", sigla: "PE" },
    { nome: "Piauí", sigla: "PI" },
    { nome: "Rio de Janeiro", sigla: "RJ" },
    { nome: "Rio Grande do Norte", sigla: "RN" },
    { nome: "Rio Grande do Sul", sigla: "RS" },
    { nome: "Rondônia", sigla: "RO" },
    { nome: "Roraima", sigla: "RR" },
    { nome: "Santa Catarina", sigla: "SC" },
    { nome: "São Paulo", sigla: "SP" },
    { nome: "Sergipe", sigla: "SE" },
    { nome: "Tocantins", sigla: "TO" }
  ];

    const select = document.getElementById('estados');
    for (let i = 0; i < estados.length; i += 1) {
        const option = document.createElement('option');
        option.value = estados[i].sigla;
        option.innerText = estados[i].nome;
        select.appendChild(option);
    }

    const cepInput = document.querySelector('#cep');

    cepInput.addEventListener('input', function() {
      let cep = cepInput.value.replace(/\D/g, '');
      if (cep.length === 8) {
        cep = cep.replace(/(\d{5})(\d{3})/, '$1-$2');
        cepInput.value = cep;
      }
    });

    const form = document.querySelector('formulario');

    