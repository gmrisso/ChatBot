import React, {Component} from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

/*

https://www.ordinarycoders.com/blog/article/reactjs-chatbot
https://lucasbassetti.com.br/react-simple-chatbot/

*/

const config ={
	width: "400px",
	height: "500px",
	/*floating: true,*/
  };

const theme = {
	background: '#f5f8fb',
	fontFamily: 'Helvetica Neue',
	headerBgColor: '#EF6C00',
	headerFontColor: '#fff',
	headerFontSize: '15px',
	botBubbleColor: '#EF6C00',
	botFontColor: '#fff',
	userBubbleColor: '#fff',
	userFontColor: '#4a4a4a',
  };

class SimpleForm extends Component {
	render() {
	  return (
		<ThemeProvider theme={theme}>
		<ChatBot 
		 steps={[
		   {
			id:'1', 
			message:'Oi!!! Sou o Gigi. Estou aqui para fazer seu cadastro.' 
			+ ' Para isso, vou precisar de algumas informações.', 
			user:false,
			trigger:'2'
		   },
		   {
			id:'2', 
			message:'Qual seu nome?', 
			user:false,
			trigger:'name',
		   },
		   {
			id: 'name',			
			user:true,
			trigger:'3',
		  },
		  {
			id:'3', 
			message:'Oi {previousValue}, qual seu gênero?', 
			user:false,
			trigger:'gender',
		   },
		   {
            id: 'gender',
            options: [
			  { value: 'female', label: 'Feminino', trigger: '4' },
              { value: 'male', label: 'Masculino', trigger: '4' },
			  { value: 'other', label: 'Outro', trigger: '4' },
            ],
          },
		  {
            id: '4',
			message: 'Vou precisar do seu e-mail.',
			trigger:'5',
		  },
		  {
			id: '5',			
			user:true,
			trigger:'6',
		  },
		  {
			id:'6', 
			message:'Qual seu whatsapp?', 
			user:false,
			trigger:'7',
		   },
		   {
			id: '7',			
			user:true,
			trigger:'8',
		  },
		   {
			id:'8', 
			message:'E qual sua data de nascimento?', 
			user:false,
			trigger:'9',
		   },
		   {
			id: '9',			
			user:true,
			trigger:'end',
		  },
		  {
            id: 'end',
            message: 'Por enquanto é isso. Seja bem vindo ao nosso sistema.',
            end: true,
          },
		   ]}
		   {...config}
		/>
		</ThemeProvider>
	  );
	}
		 
  }
  
  export default SimpleForm;