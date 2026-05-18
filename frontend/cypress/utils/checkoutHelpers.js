import { CheckoutPage } from "./pages/";

export class CheckoutHelpers {
  preencherDadosPessoais({ nome, email, celular, cpf }) {
    CheckoutPage.typeNomeCompleto(nome);
    CheckoutPage.typeEmail(email);
    CheckoutPage.typeCelular(celular);
    CheckoutPage.typeCPF(cpf);
  }

  preencherEndereco({ cep, rua, numero, complemento, bairro, cidade, estado }) {
    CheckoutPage.typeCEP(cep);
    CheckoutPage.typeEndereco(rua);
    CheckoutPage.typeNumero(numero);
    CheckoutPage.typeBairro(bairro);
    CheckoutPage.typeCidade(cidade);
    CheckoutPage.selectEstado(estado);
  }
}
