// Fecha os alerts após 10 segundos
document.querySelectorAll('.alert').forEach(alert => {
    setTimeout(() => { bootstrap.Alert.getOrCreateInstance(alert).close(); }, 10000);
});

// Exibe o modal de login quando solicitado por redirecionamento
document.addEventListener('DOMContentLoaded', function () {
    const showLoginModal = document.body.dataset.showLogin === 'true';
    if (showLoginModal) {
        const modalElement = document.getElementById('loginModal');
        if (modalElement) {
            const loginModal = new bootstrap.Modal(modalElement);
            loginModal.show();
        }
    }
});

// Hack para ajustes visuais no formulário de perfil
document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById("id_image");
    if (!fileInput) return;

    const container = fileInput.closest(".mb-3");

    // 1. Centraliza o bloco inteiro e a label principal ("Foto de perfil")
    container.classList.add("text-center");
    const mainLabel = container.querySelector('label[for="id_image"]');
    if (mainLabel) {
        mainLabel.classList.add("d-block", "fw-bold");
    }

    // 2. Esconde o link do arquivo atual e o <br>
    const currentLink = container.querySelector('a[href*="/media/"]');
    if (currentLink) currentLink.remove();

    const br = container.querySelector("br");
    if (br) br.remove();

    // 3. Remove os textos soltos ("Atualmente:" e "Modificar:")
    container.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
            const text = node.textContent.trim();
            if (text.startsWith("Atualmente:") || text.startsWith("Modificar:")) {
                node.textContent = "";
            }
        }
    });

    // 4. Agrupa e centraliza o checkbox "Limpar" com estilo do Bootstrap
    const clearCheckbox = document.getElementById("image-clear_id");
    const clearLabel = container.querySelector('label[for="image-clear_id"]');

    if (clearCheckbox && clearLabel) {
        const checkWrapper = document.createElement("div");
        checkWrapper.className = "d-inline-flex align-items-center justify-content-center gap-2 mb-3";

        clearCheckbox.classList.add("form-check-input", "mt-0");
        clearLabel.classList.add("form-check-label");

        // Insere o wrapper logo antes do input de arquivo e move o checkbox + label para dentro dele
        container.insertBefore(checkWrapper, fileInput);
        checkWrapper.appendChild(clearCheckbox);
        checkWrapper.appendChild(clearLabel);
    }
});