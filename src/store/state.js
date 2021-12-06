export default {
  appLogoImg: require('../assets/img/pablo-foto.png'),
  appNavLinks: [
    {
      id: '',
      text: 'Início'
    },
    {
      id: 'about',
      text: 'Sobre'
    },
    {
      id: 'services',
      text: 'Serviços'
    },
    {
      id: 'form-submition',
      text: 'Fale comigo'
    },
    {
      id: 'contact',
      text: 'Contatos'
    },
  ],
  appTitle: 'O que é o Lorem Ipsum?',
  appSubTitleBottom: 'Porque é que o usamos?',
  appHelloButton: 'Quero meu nome neste site!',
  servicesTitle: 'Conheça nossos serviços:',
  services: [
    {
      title: 'Site comercial',
      description: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
      icon: require("../assets/icons/users-solid.png")
    },
    {
      title: 'Sistemas em geral',
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
      icon: require("../assets/icons/baby-solid-roxo.png")
    },
  ],
  appAboutTitle: 'Estamos prontos para atendê-lo!',
  appAboutSubTitle: 'Desde já agradeçemos pela confiança.',
  appAboutButtonLink: 'https://api.whatsapp.com/send?phone=5544997008861&text=Olá, vim através do site...',
  appAboutIcon: require('../assets/icons/whatsapp-brands.svg'),
  appAboutButtonText: 'Enviar mensagem',
  appAboutDescription: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.',
  appFormTitle: 'Solicite agora mesmo um atendimento!',
  appFormDescription: 'I’ve heard the argument that “lorem ipsum” is effective in wireframing or design because it helps people focus on the actual layout, or color scheme, or whatever. What kills me here is that we’re talking about creating a user experience that will (whether we like it or not) be DRIVEN by words. The entire structure of the page or app flow is FOR THE WORDS.',
  contactTitle: 'Contatos',
  contacts: [
    {
      icon: require('../assets/icons/whatsapp-square-brands.svg'),
      text: '(44) 99156-7410',
      link: 'https://api.whatsapp.com/send?phone=5544991567410&text=Olá, vim através do site...'
    },
    {
      icon: require('../assets/icons/envelope-solid.svg'),
      text: 'pablosaunite@gmail.com',
      link: 'mailto:pablosaunite@gmail.com'
    }
  ],
  copyright: '2021 Copyright Pablo Saunite de Souza | Desenvolvido por Pablo Saunite de Souza.',
  floatButtonLink: 'https://api.whatsapp.com/send?phone=5544991567410&text=Olá, vim através do site...',
  floatButtonEffect: () => {
    const a = document.createElement('a')
    a.href = 'https://api.whatsapp.com/send?phone=5544991567410&text=Olá, vim através do site...'
    a.target = '_blank'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  },
  floatButtonIcon: require('../assets/icons/whatsapp-brands.svg'),
}