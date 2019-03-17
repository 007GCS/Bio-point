 {/*-------------------------Fala que a funçao Page esta relacionada a determinado local-----------------*/}

 import Page1 from '../screens/Inicio'
  import Page2 from '../screens/HomeScreen';
  import Page3 from '../screens/RegistroScreen';
  import Page4 from '../screens/comofunciona';
  import Page5 from '../screens/tabela';
  import Page6 from '../screens/tabelat';
  import Page7 from '../screens/Pedido';
  import Page8 from '../screens/login';
  import Page9 from '../screens/cadastro';
  import Page10 from '../screens/entrega';
  import Page11 from '../screens/gifs';
  {/*-------------------------Importa funçoes do navegator-------------------------------------------*/}

  import { createStackNavigator } from 'react-navigation';

  {/*-------------------------Associa uma palavra a determinada pagina-------------------------------*/}

  const StackNavigator = createStackNavigator({
    Home: Page1,
    Inicio: Page2,
    Registro: Page3,
    Comof: Page4,
    Tabela: Page5,
    Tabelat: Page6,
    Pedido: Page7,
    Login: Page8,
    Cadastro: Page9,
    entrega: Page10,
    gif: Page11,
  });
  {/*-------------------------Possibilita exportar telas---------------------------------------------*/}

  export default { StackNavigator };