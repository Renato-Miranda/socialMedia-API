import ValidacaoSevices from "../src/services/ValidacaoServices";

describe("Usuario", () => {
    test("quando entrada do nome do usuario retorna false", () => {
        expect(ValidacaoSevices.validaNomeUsuario("")).toBe(false)
        expect(ValidacaoSevices.validaNomeUsuario("ab")).toBe(false)
        expect(ValidacaoSevices.validaNomeUsuario([])).toBe(false)
        expect(ValidacaoSevices.validaNomeUsuario({})).toBe(false)
        expect(ValidacaoSevices.validaNomeUsuario(0)).toBe(false)
        expect(ValidacaoSevices.validaNomeUsuario(111)).toBe(false)
        expect(ValidacaoSevices.validaNomeUsuario(true)).toBe(false)
        expect(ValidacaoSevices.validaNomeUsuario(NaN)).toBe(false)
    })

    test("quando entrada do nome do usuario retorna true", () => {
        expect(ValidacaoSevices.validaNomeUsuario("cabloco")).toBe(true)
        expect(ValidacaoSevices.validaNomeUsuario("ju3")).toBe(true)
    })

    test("quando entrada do email retorna false", () => {
        expect(ValidacaoSevices.validaEmail("")).toBe(false)
        expect(ValidacaoSevices.validaEmail("aa@a")).toBe(false)
        expect(ValidacaoSevices.validaEmail(".com")).toBe(false)
    })

    test("quando entrada do email retorna true", () => {
        expect(ValidacaoSevices.validaEmail("asmou@asmei.asmar")).toBe(true)
    })

    test("quando entrada da senha retorna false", () => {
        expect(ValidacaoSevices.validaSenha("")).toBe(false)
        expect(ValidacaoSevices.validaSenha("123456")).toBe(false)
        expect(ValidacaoSevices.validaSenha("abcdefgh")).toBe(false)
    })

    test("quando entrada da senha retorna true", () => {
        expect(ValidacaoSevices.validaSenha("amorfceasd2")).toBe(true)
    })

    test("quando entrada dos campos do usuario retorna false", () => {
        expect(ValidacaoSevices.ValidaCamposUsuario("", "", "")).toBe(false)
        expect(ValidacaoSevices.ValidaCamposUsuario("", "aa@bb.com", "aass3344")).toBe(false)
        expect(ValidacaoSevices.ValidaCamposUsuario("marx", "karl@mais.valia", "eita")).toBe(false)
    })

    test("quando entrada dos campos do usuario retorna true", () => {
        expect(ValidacaoSevices.ValidaCamposUsuario("vitinho69", "ca@me.lo", "deregjhonson2")).toBe(true)
    })
})

describe("Comentario", () => {
    test("quando entrada do comentario retorna false", () => {
        expect(ValidacaoSevices.ValidaConteudoComentario("")).toBe(false)
    })

    test("quando entrada do comentario retorna true", () => {
        expect(ValidacaoSevices.ValidaConteudoComentario("abcde123!!@@")).toBe(true)
    })
})

describe("Post", () => {
    test("quanto conteudo do post retorna false", () => {
        expect(ValidacaoSevices.ValidaConteudoPost("")).toBe(false)
    })
    
    test("quando conteudo do post retorna true", () => {
        expect(ValidacaoSevices.ValidaConteudoPost("!@#!@#@!#)(#$1234")).toBe(true)
    })
})


