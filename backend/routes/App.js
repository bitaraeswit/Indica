
// Import Modules
const express = require('express');
const router = express.Router();
const httpStatus = require('http-status-codes');

// Import Controllers
const Auth = require('@controllers/Auth');
const Avaliacao = require('@controllers/Avaliacao');
const Banner = require('@controllers/Banner');
const Categoria = require('@controllers/Categoria');
const CategoriaProduto = require('@controllers/CategoriaProduto');
const Cidade = require('@controllers/Cidade');
const CupomDesconto = require('@controllers/CupomDesconto');
const Curtida = require('@controllers/Curtida');
const EnderecoLoja = require('@controllers/EnderecoLoja');
const EnderecoUsuario = require('@controllers/EnderecoUsuario');
const Estado = require('@controllers/Estado');
const Favorito = require('@controllers/Favorito');
const ImagemProduto = require('@controllers/ImagemProduto');
const ItemPedido = require('@controllers/ItemPedido');
const Localidade = require('@controllers/Localidade');
const Loja = require('@controllers/Loja');
const Marca = require('@controllers/Marca');
const MarcaProduto = require('@controllers/MarcaProduto');
const MetodoPagamento = require('@controllers/MetodoPagamento');
const Notificacao = require('@controllers/Notificacao');
const Pedido = require('@controllers/Pedido');
const Produto = require('@controllers/Produto');
const StatusPedido = require('@controllers/StatusPedido');
const Tamanho = require('@controllers/Tamanho');
const TamanhoProduto = require('@controllers/TamanhoProduto');
const Usuario = require('@controllers/Usuario');

// Define routes
router.post('/login', Usuario.login);
router.put('/password/reset', Usuario.resetPassword);
router.get('/usuario', Usuario.index);

// Avaliacao
router.get('/avaliacao', Avaliacao.index);
router.get('/avaliacao/:id', Avaliacao.show);
router.post('/avaliacao', Avaliacao.store);
router.put('/avaliacao/:id', Avaliacao.update);
router.delete('/avaliacao/:id', Avaliacao.destroy);

// Banner
router.get('/banner', Banner.index);
router.get('/banner/:id', Banner.show);
router.post('/banner', Banner.store);
router.put('/banner/:id', Banner.update);
router.delete('/banner/:id', Banner.destroy);

// Categoria
router.get('/categoria', Categoria.index);
router.get('/categoria/:id', Categoria.show);
router.post('/categoria', Categoria.store);
router.put('/categoria/:id', Categoria.update);
router.delete('/categoria/:id', Categoria.destroy);

// Categoria Produto
router.get('/categoria-produto', CategoriaProduto.index);
router.get('/categoria-produto/:id', CategoriaProduto.show);
router.post('/categoria-produto', CategoriaProduto.store);
router.put('/categoria-produto/:id', CategoriaProduto.update);
router.delete('/categoria-produto/:id', CategoriaProduto.destroy);

// Cidade
router.get('/cidade', Cidade.index);
router.get('/cidade/:id', Cidade.show);
router.post('/cidade', Cidade.store);
router.put('/cidade/:id', Cidade.update);
router.delete('/cidade/:id', Cidade.destroy);

// Cupom Desconto
router.get('/cupom-desconto', CupomDesconto.index);
router.get('/cupom-desconto/:id', CupomDesconto.show);
router.post('/cupom-desconto', CupomDesconto.store);
router.put('/cupom-desconto/:id', CupomDesconto.update);
router.delete('/cupom-desconto/:id', CupomDesconto.destroy);

// Curtida
router.get('/curtida', Curtida.index);
router.get('/curtida/:id', Curtida.show);
router.post('/curtida', Curtida.store);
router.put('/curtida/:id', Curtida.update);
router.delete('/curtida/:id', Curtida.destroy);

// Endereco Loja
router.get('/endereco-loja', EnderecoLoja.index);
router.get('/endereco-loja/:id', EnderecoLoja.show);
router.post('/endereco-loja', EnderecoLoja.store);
router.put('/endereco-loja/:id', EnderecoLoja.update);
router.delete('/endereco-loja/:id', EnderecoLoja.destroy);

// Endereco Usuario
router.get('/endereco-usuario', EnderecoUsuario.index);
router.get('/endereco-usuario/:id', EnderecoUsuario.show);
router.post('/endereco-usuario', EnderecoUsuario.store);
router.put('/endereco-usuario/:id', EnderecoUsuario.update);
router.delete('/endereco-usuario/:id', EnderecoUsuario.destroy);

// Estado
router.get('/estado', Estado.index);
router.get('/estado/:id', Estado.show);
router.post('/estado', Estado.store);
router.put('/estado/:id', Estado.update);
router.delete('/estado/:id', Estado.destroy);

// Favorito
router.get('/favorito', Favorito.index);
router.get('/favorito/:id', Favorito.show);
router.post('/favorito', Favorito.store);
router.put('/favorito/:id', Favorito.update);
router.delete('/favorito/:id', Favorito.destroy);

// Imagem Produto
router.get('/imagem-produto', ImagemProduto.index);
router.get('/imagem-produto/:id', ImagemProduto.show);
router.post('/imagem-produto', ImagemProduto.store);
router.put('/imagem-produto/:id', ImagemProduto.update);
router.delete('/imagem-produto/:id', ImagemProduto.destroy);

// Item Pedido
router.get('/item-pedido', ItemPedido.index);
router.get('/item-pedido/:id', ItemPedido.show);
router.post('/item-pedido', ItemPedido.store);
router.put('/item-pedido/:id', ItemPedido.update);
router.delete('/item-pedido/:id', ItemPedido.destroy);

// Localidade
router.get('/localidade', Localidade.index);
router.get('/localidade/:id', Localidade.show);
router.post('/localidade', Localidade.store);
router.put('/localidade/:id', Localidade.update);
router.delete('/localidade/:id', Localidade.destroy);

// Loja
router.get('/loja', Loja.index);
router.get('/loja/:id', Loja.show);
router.post('/loja', Loja.store);
router.put('/loja/:id', Loja.update);
router.delete('/loja/:id', Loja.destroy);

// Marca
router.get('/marca', Marca.index);
router.get('/marca/:id', Marca.show);
router.post('/marca', Marca.store);
router.put('/marca/:id', Marca.update);
router.delete('/marca/:id', Marca.destroy);

// Marca Produto
router.get('/marca-produto', MarcaProduto.index);
router.get('/marca-produto/:id', MarcaProduto.show);
router.post('/marca-produto', MarcaProduto.store);
router.put('/marca-produto/:id', MarcaProduto.update);
router.delete('/marca-produto/:id', MarcaProduto.destroy);

// Metodo Pagamento
router.get('/metodo-pagamento', MetodoPagamento.index);
router.get('/metodo-pagamento/:id', MetodoPagamento.show);
router.post('/metodo-pagamento', MetodoPagamento.store);
router.put('/metodo-pagamento/:id', MetodoPagamento.update);
router.delete('/metodo-pagamento/:id', MetodoPagamento.destroy);

// Notificacao
router.get('/notificacao', Notificacao.index);
router.get('/notificacao/:id', Notificacao.show);
router.post('/notificacao', Notificacao.store);
router.put('/notificacao/:id', Notificacao.update);
router.delete('/notificacao/:id', Notificacao.destroy);

// Pedido
router.get('/pedido', Pedido.index);
router.get('/pedido/:id', Pedido.show);
router.post('/pedido', Pedido.store);
router.put('/pedido/:id', Pedido.update);
router.delete('/pedido/:id', Pedido.destroy);

// Produto
router.get('/produto', Produto.index);
router.get('/produto/:id', Produto.show);
router.post('/produto', Produto.store);
router.put('/produto/:id', Produto.update);
router.delete('/produto/:id', Produto.destroy);

// Status Pedido
router.get('/status-pedido', StatusPedido.index);
router.get('/status-pedido/:id', StatusPedido.show);
router.post('/status-pedido', StatusPedido.store);
router.put('/status-pedido/:id', StatusPedido.update);
router.delete('/status-pedido/:id', StatusPedido.destroy);

// Tamanho
router.get('/tamanho', Tamanho.index);
router.get('/tamanho/:id', Tamanho.show);
router.post('/tamanho', Tamanho.store);
router.put('/tamanho/:id', Tamanho.update);
router.delete('/tamanho/:id', Tamanho.destroy);

// Tamanho Produto
router.get('/tamanho-produto', TamanhoProduto.index);
router.get('/tamanho-produto/:id', TamanhoProduto.show);
router.post('/tamanho-produto', TamanhoProduto.store);
router.put('/tamanho-produto/:id', TamanhoProduto.update);
router.delete('/tamanho-produto/:id', TamanhoProduto.destroy);


router.use(async (req, res, next) => {
    try {
        const { CLIENT, TOKEN } = req;
        const decoded = await Auth.decodedToken(TOKEN, CLIENT.private_key);
        req.DECODED = decoded;
        next();
    } catch (error) {
        Auth.closeSession(req.TOKEN);
        return res.status(httpStatus.UNAUTHORIZED).json({ error: 'Sessão expirada' });
    }
});

router.use(Auth.checkSession);

router.post('/validate', Usuario.validate);
router.get('/usuario', Usuario.index);
router.put('/usuario/password', Usuario.updatePassword);
router.get('/usuario/:id', Usuario.show);
router.post('/usuario', Usuario.store);
router.put('/usuario/:id', Usuario.update);
router.delete('/usuario/:id', Usuario.destroy);
router.post('/usuario/logout', Usuario.logout);

module.exports = router;