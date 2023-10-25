import ValidacaoPostServices from "../src/services/ValidacaoPostServices"
import ValidacaoUsuarioServices from "../src/services/ValidacaoUsuarioServices"


describe("Usuario", () => {
    test("quando entrada do nome do usuario retorna false", () => {
        expect(ValidacaoUsuarioServices.validaNomeUsuario("")).toBe(false)
        expect(ValidacaoUsuarioServices.validaNomeUsuario("ab")).toBe(false)
        expect(ValidacaoUsuarioServices.validaNomeUsuario([])).toBe(false)
        expect(ValidacaoUsuarioServices.validaNomeUsuario({})).toBe(false)
        expect(ValidacaoUsuarioServices.validaNomeUsuario(0)).toBe(false)
        expect(ValidacaoUsuarioServices.validaNomeUsuario(111)).toBe(false)
        expect(ValidacaoUsuarioServices.validaNomeUsuario(true)).toBe(false)
        expect(ValidacaoUsuarioServices.validaNomeUsuario(NaN)).toBe(false)
    })

    test("quando entrada do nome do usuario retorna true", () => {
        expect(ValidacaoUsuarioServices.validaNomeUsuario("cabloco")).toBe(true)
        expect(ValidacaoUsuarioServices.validaNomeUsuario("ju3")).toBe(true)
    })

    test("quando entrada do email retorna false", () => {
        expect(ValidacaoUsuarioServices.validaEmail("")).toBe(false)
        expect(ValidacaoUsuarioServices.validaEmail("aa@a")).toBe(false)
        expect(ValidacaoUsuarioServices.validaEmail(".com")).toBe(false)
    })

    test("quando entrada do email retorna true", () => {
        expect(ValidacaoUsuarioServices.validaEmail("asmou@asmei.asmar")).toBe(true)
    })

    test("quando entrada da senha retorna false", () => {
        expect(ValidacaoUsuarioServices.validaSenha("")).toBe(false)
        expect(ValidacaoUsuarioServices.validaSenha("123456")).toBe(false)
        expect(ValidacaoUsuarioServices.validaSenha("abcdefgh")).toBe(false)
    })

    test("quando entrada da senha retorna true", () => {
        expect(ValidacaoUsuarioServices.validaSenha("amorfceasd2")).toBe(true)
    })

    test("quando entrada dos campos do usuario retorna false", () => {
        expect(ValidacaoUsuarioServices.ValidaCamposUsuario("", "", "")).toBe(false)
        expect(ValidacaoUsuarioServices.ValidaCamposUsuario("", "aa@bb.com", "aass3344")).toBe(false)
        expect(ValidacaoUsuarioServices.ValidaCamposUsuario("marx", "karl@mais.valia", "eita")).toBe(false)
    })

    test("quando entrada dos campos do usuario retorna true", () => {
        expect(ValidacaoUsuarioServices.ValidaCamposUsuario("vitinho69", "camelo@corcovas.com", "deregjhonson2")).toBe(true)
    })
})

describe("Post", () => {
    test("quanto conteudo do post retorna false", () => {
        expect(ValidacaoPostServices.ValidaConteudoPost("")).toBe(false)
    })
    
    test("quando conteudo do post retorna true", () => {
        expect(ValidacaoPostServices.ValidaConteudoPost("!@#!@#@!#)(#$1234")).toBe(true)
    })
})


