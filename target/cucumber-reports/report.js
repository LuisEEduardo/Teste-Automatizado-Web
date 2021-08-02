$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("funcoes/Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    },
    {
      "line": 2,
      "name": "@End2End"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "fazer o login com sucesso",
  "description": "",
  "id": "login;fazer-o-login-com-sucesso",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 8,
      "name": "@RealizarLogin"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "o usuario informa username como \"\u003cusuario\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "informar a password como \"\u003csenha\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clicar no botao login",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o sistema devera colocar o usuario na pagina de produtos",
  "keyword": "Entao "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "login;fazer-o-login-com-sucesso;",
  "rows": [
    {
      "cells": [
        "usuario",
        "senha"
      ],
      "line": 16,
      "id": "login;fazer-o-login-com-sucesso;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 17,
      "id": "login;fazer-o-login-com-sucesso;;2"
    },
    {
      "cells": [
        "locked_out_user",
        "secret_sauce"
      ],
      "line": 18,
      "id": "login;fazer-o-login-com-sucesso;;3"
    },
    {
      "cells": [
        "problem_user",
        "secret_sauce"
      ],
      "line": 19,
      "id": "login;fazer-o-login-com-sucesso;;4"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 20,
      "id": "login;fazer-o-login-com-sucesso;;5"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 3500782200,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina de login",
  "keyword": "Dado "
});
formatter.match({
  "location": "PassoLogin.que_o_usuario_esteja_na_pagina_de_login()"
});
formatter.result({
  "duration": 470106600,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "fazer o login com sucesso",
  "description": "",
  "id": "login;fazer-o-login-com-sucesso;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    },
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 8,
      "name": "@RealizarLogin"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "o usuario informa username como \"standard_user\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "informar a password como \"secret_sauce\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clicar no botao login",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o sistema devera colocar o usuario na pagina de produtos",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 33
    }
  ],
  "location": "PassoLogin.o_usuario_informa_username_como(String)"
});
formatter.result({
  "duration": 246820300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 26
    }
  ],
  "location": "PassoLogin.informar_a_password_como(String)"
});
formatter.result({
  "duration": 131571600,
  "status": "passed"
});
formatter.match({
  "location": "PassoLogin.clicar_no_botao_login()"
});
formatter.result({
  "duration": 151056400,
  "status": "passed"
});
formatter.match({
  "location": "PassoLogin.o_sistema_devera_colocar_o_usuario_na_pagina_de_produtos()"
});
formatter.result({
  "duration": 1137600,
  "status": "passed"
});
formatter.after({
  "duration": 1010012500,
  "status": "passed"
});
formatter.before({
  "duration": 1994244800,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina de login",
  "keyword": "Dado "
});
formatter.match({
  "location": "PassoLogin.que_o_usuario_esteja_na_pagina_de_login()"
});
formatter.result({
  "duration": 402878700,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "fazer o login com sucesso",
  "description": "",
  "id": "login;fazer-o-login-com-sucesso;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    },
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 8,
      "name": "@RealizarLogin"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "o usuario informa username como \"locked_out_user\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "informar a password como \"secret_sauce\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clicar no botao login",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o sistema devera colocar o usuario na pagina de produtos",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "locked_out_user",
      "offset": 33
    }
  ],
  "location": "PassoLogin.o_usuario_informa_username_como(String)"
});
formatter.result({
  "duration": 172516000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 26
    }
  ],
  "location": "PassoLogin.informar_a_password_como(String)"
});
formatter.result({
  "duration": 154116100,
  "status": "passed"
});
formatter.match({
  "location": "PassoLogin.clicar_no_botao_login()"
});
formatter.result({
  "duration": 124820400,
  "status": "passed"
});
formatter.match({
  "location": "PassoLogin.o_sistema_devera_colocar_o_usuario_na_pagina_de_produtos()"
});
formatter.result({
  "duration": 372000,
  "status": "passed"
});
formatter.after({
  "duration": 922174800,
  "status": "passed"
});
formatter.before({
  "duration": 2085139500,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina de login",
  "keyword": "Dado "
});
formatter.match({
  "location": "PassoLogin.que_o_usuario_esteja_na_pagina_de_login()"
});
formatter.result({
  "duration": 396097300,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "fazer o login com sucesso",
  "description": "",
  "id": "login;fazer-o-login-com-sucesso;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    },
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 8,
      "name": "@RealizarLogin"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "o usuario informa username como \"problem_user\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "informar a password como \"secret_sauce\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clicar no botao login",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o sistema devera colocar o usuario na pagina de produtos",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "problem_user",
      "offset": 33
    }
  ],
  "location": "PassoLogin.o_usuario_informa_username_como(String)"
});
formatter.result({
  "duration": 173363600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 26
    }
  ],
  "location": "PassoLogin.informar_a_password_como(String)"
});
formatter.result({
  "duration": 132208800,
  "status": "passed"
});
formatter.match({
  "location": "PassoLogin.clicar_no_botao_login()"
});
formatter.result({
  "duration": 164848400,
  "status": "passed"
});
formatter.match({
  "location": "PassoLogin.o_sistema_devera_colocar_o_usuario_na_pagina_de_produtos()"
});
formatter.result({
  "duration": 395300,
  "status": "passed"
});
formatter.after({
  "duration": 878521500,
  "status": "passed"
});
formatter.before({
  "duration": 2369483900,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina de login",
  "keyword": "Dado "
});
formatter.match({
  "location": "PassoLogin.que_o_usuario_esteja_na_pagina_de_login()"
});
formatter.result({
  "duration": 378608200,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "fazer o login com sucesso",
  "description": "",
  "id": "login;fazer-o-login-com-sucesso;;5",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    },
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 8,
      "name": "@RealizarLogin"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "o usuario informa username como \"performance_glitch_user\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "informar a password como \"secret_sauce\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clicar no botao login",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o sistema devera colocar o usuario na pagina de produtos",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "performance_glitch_user",
      "offset": 33
    }
  ],
  "location": "PassoLogin.o_usuario_informa_username_como(String)"
});
formatter.result({
  "duration": 183673200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 26
    }
  ],
  "location": "PassoLogin.informar_a_password_como(String)"
});
formatter.result({
  "duration": 138924600,
  "status": "passed"
});
formatter.match({
  "location": "PassoLogin.clicar_no_botao_login()"
});
formatter.result({
  "duration": 5171326100,
  "status": "passed"
});
formatter.match({
  "location": "PassoLogin.o_sistema_devera_colocar_o_usuario_na_pagina_de_produtos()"
});
formatter.result({
  "duration": 391400,
  "status": "passed"
});
formatter.after({
  "duration": 906621400,
  "status": "passed"
});
});