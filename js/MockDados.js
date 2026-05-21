function inicializarUsuariosMockados() {
    if (!localStorage.getItem('usuarios_mock')) {
        
        const usuariosDeTeste = [
            { username: "admin", email: "admin@teste.com", senha: "12345678", role: "administrador" },
            { username: "joao", email: "joao@teste.com", senha: "456789123", role: "usuario" },
            { username: "maria", email: "maria@teste.com", senha: "789123456", role: "usuario" }
        ];

        localStorage.setItem('usuarios_mock', JSON.stringify(usuariosDeTeste));
        console.log("🚀 Usuários mockados carregados no LocalStorage com sucesso!");
    }
}


inicializarUsuariosMockados();