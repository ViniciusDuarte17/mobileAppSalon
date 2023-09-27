export const section = {
    cadastro: [
        {
            id: 1,
            label: 'Nome Completo ',
            placeholder: 'Digite seu nome completo',
            name: "name"
        },
        {
            id: 2,
            label: 'Email ',
            placeholder: 'Digite seu email',
            name: 'email'
        },
        {
            id:3,
            label: 'Senha ',
            placeholder: 'Digite sua senha',
            name: 'password',
            secureTextEntry: true
        }, 
        {
            id: 4,
            label: 'confirmar Senha ',
            placeholder: 'Digite seu email',
            name: "confirmaSenha",
            secureTextEntry: true
        },
    ],

    login: [
        {
            id: 1,
            label: 'Email ',
            placeholder: 'Digite seu email',
            name: 'email'
        },
        {
            id:2,
            label: 'Senha ',
            placeholder: 'Digite sua senha',
            name: 'password',
            secureTextEntry: true
        }, 
    ],

    registerService: [
        {
            id: 1,
            label: 'Digite o tipo de serviço ',
            placeholder: 'Exe: Corte de cabelo',
            name: 'typeService'
        },
        {
            id: 2,
            label: 'Digite o valor do serviço ',
            placeholder: 'Exe: 30',
            name: 'valueService'
        },
        {
            id: 3,
            label: 'Digite quantas vezes fez essa tarefa ',
            placeholder: 'Exe: 5 ',
            name: 'amount'
        },
    ]
}