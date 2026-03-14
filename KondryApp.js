{
  "version": "2.8",
  "children": [
    {
      "type": "frame",
      "id": "bi8Au",
      "x": 0,
      "y": 0,
      "name": "Frame",
      "clip": true,
      "width": 800,
      "height": 600,
      "fill": "#FFFFFF",
      "layout": "none"
    },
    {
      "type": "text",
      "id": "0dO2j",
      "x": 0,
      "y": 0,
      "fill": "#000000",
      "content": "647370",
      "fontFamily": "Inter",
      "fontSize": 12,
      "fontWeight": "normal"
    },
    {
      "type": "frame",
      "id": "3vOyI",
      "x": 40,
      "y": 40,
      "name": "Screen/Login",
      "width": 360,
      "height": 780,
      "fill": "#0D0D0F",
      "layout": "vertical",
      "children": [
        {
          "type": "frame",
          "id": "C0d2V",
          "name": "Status Bar",
          "width": "fill_container",
          "height": 62,
          "padding": [
            0,
            20
          ],
          "justifyContent": "space_between",
          "alignItems": "center",
          "children": [
            {
              "type": "text",
              "id": "xt1Ur",
              "name": "timeText",
              "fill": "#F5F5F7",
              "content": "9:41",
              "fontFamily": "Inter",
              "fontSize": 16,
              "fontWeight": "600"
            },
            {
              "type": "frame",
              "id": "rgAVK",
              "name": "statusIcons",
              "gap": 6,
              "alignItems": "center",
              "children": [
                {
                  "type": "rectangle",
                  "cornerRadius": 3,
                  "id": "N1F4W",
                  "name": "sig",
                  "fill": "#A1A1AA",
                  "width": 18,
                  "height": 10
                },
                {
                  "type": "rectangle",
                  "cornerRadius": 3,
                  "id": "BBBSI",
                  "name": "wifi",
                  "fill": "#A1A1AA",
                  "width": 14,
                  "height": 10
                },
                {
                  "type": "frame",
                  "id": "zNpxB",
                  "name": "battery",
                  "width": 24,
                  "height": 12,
                  "cornerRadius": 4,
                  "stroke": {
                    "thickness": 1,
                    "fill": "#A1A1AA"
                  },
                  "padding": 2,
                  "children": [
                    {
                      "type": "rectangle",
                      "cornerRadius": 2,
                      "id": "kjr9x",
                      "name": "batteryLevel",
                      "fill": "#F5F5F7",
                      "width": "fill_container",
                      "height": "fill_container"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "frame",
          "id": "KIEBV",
          "name": "App Content",
          "width": "fill_container",
          "height": "fill_container",
          "layout": "vertical",
          "gap": 28,
          "padding": [
            28,
            20
          ],
          "justifyContent": "space_between",
          "children": [
            {
              "type": "frame",
              "id": "ogSjb",
              "name": "hero",
              "width": "fill_container",
              "layout": "vertical",
              "gap": 14,
              "children": [
                {
                  "type": "text",
                  "id": "WhVbq",
                  "name": "brand",
                  "fill": "#A78BFA",
                  "content": "KONDRY",
                  "fontFamily": "Inter",
                  "fontSize": 14,
                  "fontWeight": "700",
                  "letterSpacing": 1.2
                },
                {
                  "type": "text",
                  "id": "skoSi",
                  "name": "title",
                  "fill": "#F5F5F7",
                  "textGrowth": "fixed-width",
                  "width": "fill_container",
                  "content": "Bienvenido a tu próxima carrera",
                  "lineHeight": 1.1,
                  "fontFamily": "Inter",
                  "fontSize": 34,
                  "fontWeight": "700"
                },
                {
                  "type": "text",
                  "id": "al5rM",
                  "name": "subtitle",
                  "fill": "#A1A1AA",
                  "textGrowth": "fixed-width",
                  "width": "fill_container",
                  "content": "Regístrate en minutos, sigue tus eventos y prepárate para competir con estilo.",
                  "lineHeight": 1.4,
                  "fontFamily": "Inter",
                  "fontSize": 16,
                  "fontWeight": "normal"
                },
                {
                  "type": "frame",
                  "id": "UXnCC",
                  "name": "infoCard",
                  "width": "fill_container",
                  "fill": "#14141A",
                  "cornerRadius": 16,
                  "stroke": {
                    "thickness": 1,
                    "fill": "#23232B"
                  },
                  "layout": "vertical",
                  "gap": 8,
                  "padding": 16,
                  "children": [
                    {
                      "type": "text",
                      "id": "ARQo3",
                      "name": "infoTitle",
                      "fill": "#E4E4E7",
                      "content": "Registro rápido",
                      "fontFamily": "Inter",
                      "fontSize": 15,
                      "fontWeight": "600"
                    },
                    {
                      "type": "text",
                      "id": "2tozd",
                      "name": "infoText",
                      "fill": "#A1A1AA",
                      "textGrowth": "fixed-width",
                      "width": "fill_container",
                      "content": "Encuentra tu categoría, confirma tus datos y asegura tu lugar en segundos.",
                      "lineHeight": 1.4,
                      "fontFamily": "Inter",
                      "fontSize": 13,
                      "fontWeight": "normal"
                    }
                  ]
                }
              ]
            },
            {
              "type": "frame",
              "id": "mW4ie",
              "name": "actions",
              "width": "fill_container",
              "layout": "vertical",
              "gap": 12,
              "children": [
                {
                  "type": "frame",
                  "id": "SYtgh",
                  "name": "cta",
                  "width": "fill_container",
                  "height": 56,
                  "fill": {
                    "type": "gradient",
                    "gradientType": "linear",
                    "enabled": true,
                    "rotation": 180,
                    "size": {
                      "height": 1
                    },
                    "colors": [
                      {
                        "color": "#8B5CF6",
                        "position": 0
                      },
                      {
                        "color": "#6D28D9",
                        "position": 1
                      }
                    ]
                  },
                  "cornerRadius": 18,
                  "justifyContent": "center",
                  "alignItems": "center",
                  "children": [
                    {
                      "type": "text",
                      "id": "WychR",
                      "name": "ctaLabel",
                      "fill": "#FFFFFF",
                      "content": "Iniciar test aquí",
                      "fontFamily": "Inter",
                      "fontSize": 15,
                      "fontWeight": "700"
                    }
                  ]
                },
                {
                  "type": "text",
                  "id": "PLals",
                  "name": "legal",
                  "fill": "#71717A",
                  "textGrowth": "fixed-width",
                  "width": "fill_container",
                  "content": "Usa estos 3 toques para recorrer el flujo in-app.",
                  "lineHeight": 1.4,
                  "textAlign": "center",
                  "fontFamily": "Inter",
                  "fontSize": 12,
                  "fontWeight": "normal"
                },
                {
                  "type": "frame",
                  "id": "XCKJL",
                  "name": "testModeSection",
                  "width": "fill_container",
                  "fill": "#14141A",
                  "cornerRadius": 14,
                  "stroke": {
                    "thickness": 1,
                    "fill": "#23232B"
                  },
                  "layout": "vertical",
                  "gap": 10,
                  "padding": 12,
                  "children": [
                    {
                      "type": "frame",
                      "id": "rLg2H",
                      "name": "header",
                      "width": "fill_container",
                      "justifyContent": "space_between",
                      "alignItems": "center",
                      "children": [
                        {
                          "type": "text",
                          "id": "Al4DZ",
                          "name": "title",
                          "fill": "#F5F5F7",
                          "content": "Arranque de test in-app",
                          "fontFamily": "Inter",
                          "fontSize": 14,
                          "fontWeight": "700"
                        },
                        {
                          "type": "frame",
                          "id": "RxipR",
                          "name": "badge",
                          "fill": "#27272F",
                          "cornerRadius": 999,
                          "padding": [
                            4,
                            8
                          ],
                          "justifyContent": "center",
                          "alignItems": "center",
                          "children": [
                            {
                              "type": "text",
                              "id": "ECIUe",
                              "name": "badgeText",
                              "fill": "#A78BFA",
                              "content": "MODO QA",
                              "fontFamily": "Inter",
                              "fontSize": 10,
                              "fontWeight": "700",
                              "letterSpacing": 0.6
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "frame",
                      "id": "dQd2D",
                      "name": "modeSelector",
                      "width": "fill_container",
                      "height": 40,
                      "fill": "#1A1A22",
                      "cornerRadius": 10,
                      "stroke": {
                        "thickness": 1,
                        "fill": "#23232B"
                      },
                      "gap": 6,
                      "padding": 4,
                      "alignItems": "center",
                      "children": [
                        {
                          "type": "frame",
                          "id": "XSxVn",
                          "name": "localOption",
                          "width": "fill_container",
                          "height": "fill_container",
                          "fill": {
                            "type": "gradient",
                            "gradientType": "linear",
                            "enabled": true,
                            "rotation": 180,
                            "size": {
                              "height": 1
                            },
                            "colors": [
                              {
                                "color": "#8B5CF6",
                                "position": 0
                              },
                              {
                                "color": "#6D28D9",
                                "position": 1
                              }
                            ]
                          },
                          "cornerRadius": 8,
                          "justifyContent": "center",
                          "alignItems": "center",
                          "children": [
                            {
                              "type": "text",
                              "id": "NysyC",
                              "name": "localText",
                              "fill": "#FFFFFF",
                              "content": "LOCAL",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "700",
                              "letterSpacing": 0.5
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "VCEuV",
                          "name": "backendOption",
                          "width": "fill_container",
                          "height": "fill_container",
                          "fill": "#27272F",
                          "cornerRadius": 8,
                          "justifyContent": "center",
                          "alignItems": "center",
                          "children": [
                            {
                              "type": "text",
                              "id": "z8dfV",
                              "name": "backendText",
                              "fill": "#A1A1AA",
                              "content": "BACKEND REAL",
                              "fontFamily": "Inter",
                              "fontSize": 11,
                              "fontWeight": "600",
                              "letterSpacing": 0.4
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "frame",
                      "id": "4Z5r5",
                      "name": "quickAccess",
                      "width": "fill_container",
                      "layout": "vertical",
                      "gap": 8,
                      "children": [
                        {
                          "type": "frame",
                          "id": "vIZXV",
                          "name": "itemDemo",
                          "width": "fill_container",
                          "height": 38,
                          "fill": "#1A1A22",
                          "cornerRadius": 10,
                          "padding": [
                            0,
                            12
                          ],
                          "justifyContent": "space_between",
                          "alignItems": "center",
                          "children": [
                            {
                              "type": "text",
                              "id": "HHokK",
                              "name": "item1Text",
                              "fill": "#E4E4E7",
                              "content": "1. Toca Login para empezar",
                              "fontFamily": "Inter",
                              "fontSize": 13,
                              "fontWeight": "500"
                            },
                            {
                              "type": "text",
                              "id": "mpVze",
                              "name": "item1Arrow",
                              "fill": "#71717A",
                              "content": "›",
                              "fontFamily": "Inter",
                              "fontSize": 16,
                              "fontWeight": "700"
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "0PO6p",
                          "name": "itemConexion",
                          "width": "fill_container",
                          "height": 38,
                          "fill": "#1A1A22",
                          "cornerRadius": 10,
                          "padding": [
                            0,
                            12
                          ],
                          "justifyContent": "space_between",
                          "alignItems": "center",
                          "children": [
                            {
                              "type": "text",
                              "id": "yvxFx",
                              "name": "item2Text",
                              "fill": "#E4E4E7",
                              "content": "2. Ve a Formulario de prueba",
                              "fontFamily": "Inter",
                              "fontSize": 13,
                              "fontWeight": "500"
                            },
                            {
                              "type": "text",
                              "id": "ugxsU",
                              "name": "item2Arrow",
                              "fill": "#71717A",
                              "content": "›",
                              "fontFamily": "Inter",
                              "fontSize": 16,
                              "fontWeight": "700"
                            }
                          ]
                        },
                        {
                          "type": "frame",
                          "id": "y9o1q",
                          "name": "itemEstado",
                          "width": "fill_container",
                          "height": 38,
                          "fill": "#1A1A22",
                          "cornerRadius": 10,
                          "padding": [
                            0,
                            12
                          ],
                          "justifyContent": "space_between",
                          "alignItems": "center",
                          "children": [
                            {
                              "type": "text",
                              "id": "y7g6d",
                              "name": "item3Text",
                              "fill": "#E4E4E7",
                              "content": "3. Abre Éxito y Lista",
                              "fontFamily": "Inter",
                              "fontSize": 13,
                              "fontWeight": "500"
                            },
                            {
                              "type": "text",
                              "id": "602Fo",
                              "name": "item3Arrow",
                              "fill": "#71717A",
                              "content": "›",
                              "fontFamily": "Inter",
                              "fontSize": 16,
                              "fontWeight": "700"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "frame",
                      "id": "EceXb",
                      "name": "whereToTest",
                      "width": "fill_container",
                      "fill": "#1A1A22",
                      "cornerRadius": 10,
                      "layout": "vertical",
                      "gap": 4,
                      "padding": [
                        10,
                        12
                      ],
                      "children": [
                        {
                          "type": "text",
                          "id": "XMd4x",
                          "name": "whereToTestTitle",
                          "fill": "#F5F5F7",
                          "content": "Dónde testear",
                          "fontFamily": "Inter",
                          "fontSize": 12,
                          "fontWeight": "700"
                        },
                        {
                          "type": "text",
                          "id": "pymwE",
                          "name": "whereToTestBody",
                          "fill": "#A1A1AA",
                          "textGrowth": "fixed-width",
                          "width": "fill_container",
                          "content": "Usa esta app en Pencil y sigue Tap 1-2-3.",
                          "lineHeight": 1.4,
                          "fontFamily": "Inter",
                          "fontSize": 12,
                          "fontWeight": "normal"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "frame",
      "id": "bDRaD",
      "x": 440,
      "y": 40,
      "name": "Screen/Formulario",
      "width": 360,
      "height": 780,
      "fill": "#0D0D0F",
      "layout": "vertical",
      "children": [
        {
          "type": "frame",
          "id": "KYpGa",
          "name": "statusBar",
          "width": "fill_container",
          "height": 62,
          "padding": [
            0,
            20
          ],
          "justifyContent": "space_between",
          "alignItems": "center",
          "children": [
            {
              "type": "text",
              "id": "pEho1",
              "name": "timeTxt",
              "fill": "#F5F7FA",
              "content": "9:41",
              "fontFamily": "Inter",
              "fontSize": 16,
              "fontWeight": "600"
            },
            {
              "type": "text",
              "id": "xeXNA",
              "name": "iconsTxt",
              "fill": "#F5F7FA",
              "content": "5G 100%",
              "fontFamily": "Inter",
              "fontSize": 12,
              "fontWeight": "600"
            }
          ]
        },
        {
          "type": "frame",
          "id": "9DzSB",
          "name": "appContent",
          "width": "fill_container",
          "height": "fill_container",
          "layout": "vertical",
          "gap": 16,
          "padding": [
            8,
            20,
            16,
            20
          ],
          "children": [
            {
              "type": "frame",
              "id": "WbTuz",
              "name": "header",
              "width": "fill_container",
              "layout": "vertical",
              "gap": 8,
              "children": [
                {
                  "type": "text",
                  "id": "5klsk",
                  "name": "title",
                  "fill": "#FFFFFF",
                  "textGrowth": "fixed-width",
                  "width": "fill_container",
                  "content": "Test en vivo dentro de Pencil",
                  "fontFamily": "Inter",
                  "fontSize": 28,
                  "fontWeight": "700"
                },
                {
                  "type": "text",
                  "id": "VFGnc",
                  "name": "subtitle",
                  "fill": "#B6BCC8",
                  "textGrowth": "fixed-width",
                  "width": "fill_container",
                  "content": "Haz taps aquí mismo para simular el flujo completo sin salir de la app.",
                  "lineHeight": 1.4,
                  "fontFamily": "Inter",
                  "fontSize": 14,
                  "fontWeight": "normal"
                },
                {
                  "type": "frame",
                  "id": "Yjced",
                  "name": "localBadge",
                  "fill": "#2A1C1C",
                  "cornerRadius": 999,
                  "padding": [
                    6,
                    10
                  ],
                  "children": [
                    {
                      "type": "text",
                      "id": "ipKQz",
                      "name": "localBadgeTxt",
                      "fill": "#F07B53",
                      "content": "MODO LOCAL",
                      "fontFamily": "Inter",
                      "fontSize": 11,
                      "fontWeight": "700",
                      "letterSpacing": 0.6
                    }
                  ]
                }
              ]
            },
            {
              "type": "frame",
              "id": "M7VWT",
              "name": "formStack",
              "width": "fill_container",
              "layout": "vertical",
              "gap": 10,
              "children": [
                {
                  "type": "frame",
                  "id": "w1N0X",
                  "name": "field1",
                  "width": "fill_container",
                  "layout": "vertical",
                  "gap": 8,
                  "children": [
                    {
                      "type": "text",
                      "id": "pN5Gc",
                      "name": "label1",
                      "fill": "#E8ECF3",
                      "content": "Nombre completo",
                      "fontFamily": "Inter",
                      "fontSize": 13,
                      "fontWeight": "600"
                    },
                    {
                      "type": "frame",
                      "id": "cssrl",
                      "name": "input1",
                      "width": "fill_container",
                      "height": 48,
                      "fill": "#171A21",
                      "cornerRadius": 12,
                      "stroke": {
                        "thickness": 1,
                        "fill": "#2F9E6F"
                      },
                      "padding": [
                        0,
                        14
                      ],
                      "alignItems": "center",
                      "children": [
                        {
                          "type": "text",
                          "id": "UQWVa",
                          "name": "hint1",
                          "fill": "#7D8799",
                          "content": "Ej: Laura Martínez",
                          "fontFamily": "Inter",
                          "fontSize": 14,
                          "fontWeight": "normal"
                        }
                      ]
                    },
                    {
                      "type": "text",
                      "id": "4gjZa",
                      "name": "validation1",
                      "fill": "#57C58B",
                      "content": "✓ OK. Ejemplo válido: Laura Martínez",
                      "fontFamily": "Inter",
                      "fontSize": 12,
                      "fontWeight": "normal"
                    }
                  ]
                },
                {
                  "type": "frame",
                  "id": "L5rOU",
                  "name": "field2",
                  "width": "fill_container",
                  "layout": "vertical",
                  "gap": 8,
                  "children": [
                    {
                      "type": "text",
                      "id": "PJ9AG",
                      "name": "label2",
                      "fill": "#E8ECF3",
                      "content": "Mail",
                      "fontFamily": "Inter",
                      "fontSize": 13,
                      "fontWeight": "600"
                    },
                    {
                      "type": "frame",
                      "id": "0B8R6",
                      "name": "input2",
                      "width": "fill_container",
                      "height": 48,
                      "fill": "#171A21",
                      "cornerRadius": 12,
                      "stroke": {
                        "thickness": 1,
                        "fill": "#E05A5A"
                      },
                      "padding": [
                        0,
                        14
                      ],
                      "alignItems": "center",
                      "children": [
                        {
                          "type": "text",
                          "id": "3LRc9",
                          "name": "hint2",
                          "fill": "#7D8799",
                          "content": "ejemplo@correo.com",
                          "fontFamily": "Inter",
                          "fontSize": 14,
                          "fontWeight": "normal"
                        }
                      ]
                    },
                    {
                      "type": "text",
                      "id": "wNuaR",
                      "name": "validation2",
                      "fill": "#E05A5A",
                      "content": "✕ Error: usa nombre@dominio.com",
                      "fontFamily": "Inter",
                      "fontSize": 12,
                      "fontWeight": "normal"
                    }
                  ]
                },
                {
                  "type": "frame",
                  "id": "ARiD4",
                  "name": "field3",
                  "width": "fill_container",
                  "layout": "vertical",
                  "gap": 8,
                  "children": [
                    {
                      "type": "text",
                      "id": "woXoK",
                      "name": "label3",
                      "fill": "#E8ECF3",
                      "content": "Teléfono",
                      "fontFamily": "Inter",
                      "fontSize": 13,
                      "fontWeight": "600"
                    },
                    {
                      "type": "frame",
                      "id": "s8hxB",
                      "name": "input3",
                      "width": "fill_container",
                      "height": 48,
                      "fill": "#171A21",
                      "cornerRadius": 12,
                      "stroke": {
                        "thickness": 1,
                        "fill": "#2F9E6F"
                      },
                      "padding": [
                        0,
                        14
                      ],
                      "alignItems": "center",
                      "children": [
                        {
                          "type": "text",
                          "id": "xx7lV",
                          "name": "hint3",
                          "fill": "#7D8799",
                          "content": "+54 9 11 1234 5678",
                          "fontFamily": "Inter",
                          "fontSize": 14,
                          "fontWeight": "normal"
                        }
                      ]
                    },
                    {
                      "type": "text",
                      "id": "aPBmU",
                      "name": "validation3",
                      "fill": "#57C58B",
                      "content": "✓ OK. Ejemplo: +54 9 11 1234 5678",
                      "fontFamily": "Inter",
                      "fontSize": 12,
                      "fontWeight": "normal"
                    }
                  ]
                },
                {
                  "type": "frame",
                  "id": "n0GD9",
                  "name": "field4",
                  "width": "fill_container",
                  "layout": "vertical",
                  "gap": 8,
                  "children": [
                    {
                      "type": "text",
                      "id": "PZ0ek",
                      "name": "label4",
                      "fill": "#E8ECF3",
                      "content": "Ciudad",
                      "fontFamily": "Inter",
                      "fontSize": 13,
                      "fontWeight": "600"
                    },
                    {
                      "type": "frame",
                      "id": "we431",
                      "name": "input4",
                      "width": "fill_container",
                      "height": 48,
                      "fill": "#171A21",
                      "cornerRadius": 12,
                      "stroke": {
                        "thickness": 1,
                        "fill": "#E05A5A"
                      },
                      "padding": [
                        0,
                        14
                      ],
                      "alignItems": "center",
                      "children": [
                        {
                          "type": "text",
                          "id": "rvZ8H",
                          "name": "hint4",
                          "fill": "#7D8799",
                          "content": "Ej: Mendoza",
                          "fontFamily": "Inter",
                          "fontSize": 14,
                          "fontWeight": "normal"
                        }
                      ]
                    },
                    {
                      "type": "text",
                      "id": "m3mHd",
                      "name": "validation4",
                      "fill": "#E05A5A",
                      "content": "✕ Error: campo requerido",
                      "fontFamily": "Inter",
                      "fontSize": 12,
                      "fontWeight": "normal"
                    }
                  ]
                },
                {
                  "type": "frame",
                  "id": "zxoEO",
                  "name": "field5",
                  "width": "fill_container",
                  "layout": "vertical",
                  "gap": 8,
                  "children": [
                    {
                      "type": "text",
                      "id": "d21RU",
                      "name": "label5",
                      "fill": "#E8ECF3",
                      "content": "Deporte que practican",
                      "fontFamily": "Inter",
                      "fontSize": 13,
                      "fontWeight": "600"
                    },
                    {
                      "type": "frame",
                      "id": "ZroiE",
                      "name": "input5",
                      "width": "fill_container",
                      "height": 48,
                      "fill": "#171A21",
                      "cornerRadius": 12,
                      "stroke": {
                        "thickness": 1,
                        "fill": "#2F9E6F"
                      },
                      "padding": [
                        0,
                        14
                      ],
                      "alignItems": "center",
                      "children": [
                        {
                          "type": "text",
                          "id": "KlrLW",
                          "name": "hint5",
                          "fill": "#7D8799",
                          "content": "Ej: Running",
                          "fontFamily": "Inter",
                          "fontSize": 14,
                          "fontWeight": "normal"
                        }
                      ]
                    },
                    {
                      "type": "text",
                      "id": "EkgqL",
                      "name": "validation5",
                      "fill": "#57C58B",
                      "content": "✓ OK. Ejemplo: Running",
                      "fontFamily": "Inter",
                      "fontSize": 12,
                      "fontWeight": "normal"
                    }
                  ]
                }
              ]
            },
            {
              "type": "frame",
              "id": "a1ggs",
              "name": "preSubmitChecklist",
              "width": "fill_container",
              "fill": "#151922",
              "cornerRadius": 12,
              "stroke": {
                "thickness": 1,
                "fill": "#2B313E"
              },
              "layout": "vertical",
              "gap": 8,
              "padding": 12,
              "children": [
                {
                  "type": "text",
                  "id": "DrXQq",
                  "name": "checkTitle",
                  "fill": "#E8ECF3",
                  "content": "Checklist local (sin backend)",
                  "fontFamily": "Inter",
                  "fontSize": 13,
                  "fontWeight": "700"
                },
                {
                  "type": "text",
                  "id": "LPqnT",
                  "name": "check1",
                  "fill": "#B6BCC8",
                  "textGrowth": "fixed-width",
                  "width": "fill_container",
                  "content": "• Completa todos los campos",
                  "fontFamily": "Inter",
                  "fontSize": 12,
                  "fontWeight": "normal"
                },
                {
                  "type": "text",
                  "id": "LiEvI",
                  "name": "check2",
                  "fill": "#B6BCC8",
                  "textGrowth": "fixed-width",
                  "width": "fill_container",
                  "content": "• Fuerza un error de mail y corrígelo",
                  "fontFamily": "Inter",
                  "fontSize": 12,
                  "fontWeight": "normal"
                },
                {
                  "type": "text",
                  "id": "G6mZa",
                  "name": "check3",
                  "fill": "#B6BCC8",
                  "textGrowth": "fixed-width",
                  "width": "fill_container",
                  "content": "• Pulsa 'Simular envío local'",
                  "fontFamily": "Inter",
                  "fontSize": 12,
                  "fontWeight": "normal"
                },
                {
                  "type": "text",
                  "id": "z5ry6",
                  "name": "check4",
                  "fill": "#B6BCC8",
                  "textGrowth": "fixed-width",
                  "width": "fill_container",
                  "content": "• Verifica pantalla de éxito demo",
                  "fontFamily": "Inter",
                  "fontSize": 12,
                  "fontWeight": "normal"
                }
              ]
            },
            {
              "type": "frame",
              "id": "K1qkv",
              "name": "submitState",
              "width": "fill_container",
              "fill": "#1C2430",
              "cornerRadius": 12,
              "stroke": {
                "thickness": 1,
                "fill": "#2B313E"
              },
              "gap": 8,
              "padding": [
                10,
                12
              ],
              "alignItems": "center",
              "children": [
                {
                  "type": "ellipse",
                  "id": "lQe9k",
                  "name": "stateDot",
                  "fill": "#F4C95D",
                  "width": 8,
                  "height": 8
                },
                {
                  "type": "text",
                  "id": "sVDCS",
                  "name": "stateTxt",
                  "fill": "#F5D889",
                  "content": "Modo demo interactivo · listo",
                  "fontFamily": "Inter",
                  "fontSize": 12,
                  "fontWeight": "600"
                }
              ]
            },
            {
              "type": "frame",
              "id": "xroLz",
              "name": "cta",
              "width": "fill_container",
              "height": 54,
              "fill": "#36D984",
              "cornerRadius": 14,
              "justifyContent": "center",
              "alignItems": "center",
              "children": [
                {
                  "type": "text",
                  "id": "PFjxm",
                  "name": "ctaLabel",
                  "fill": "#04130A",
                  "content": "Tap 2 · Simular envío",
                  "fontFamily": "Inter",
                  "fontSize": 16,
                  "fontWeight": "700"
                }
              ]
            },
            {
              "type": "text",
              "id": "h3OSv",
              "name": "microcopy",
              "fill": "#97A1B3",
              "textGrowth": "fixed-width",
              "width": "fill_container",
              "content": "Si estás en Pencil, testea aquí: Tap 1 (autorrellenar), Tap 2 (simular envío), Tap 3 (ver resultado).",
              "lineHeight": 1.4,
              "fontFamily": "Inter",
              "fontSize": 12,
              "fontWeight": "normal"
            },
            {
              "type": "frame",
              "id": "PI1XO",
              "name": "modeSwitch",
              "width": "fill_container",
              "layout": "vertical",
              "gap": 8,
              "children": [
                {
                  "type": "text",
                  "id": "lQr60",
                  "name": "modeLabel",
                  "fill": "#9DA3B2",
                  "content": "Modo de prueba",
                  "fontFamily": "Inter",
                  "fontSize": 12,
                  "fontWeight": "700"
                },
                {
                  "type": "frame",
                  "id": "fJlvO",
                  "name": "modeRow",
                  "width": "fill_container",
                  "height": 44,
                  "fill": "#151922",
                  "cornerRadius": 12,
                  "stroke": {
                    "thickness": 1,
                    "fill": "#2B313E"
                  },
                  "gap": 8,
                  "padding": 4,
                  "children": [
                    {
                      "type": "frame",
                      "id": "Z7Siw",
                      "name": "modeLocal",
                      "width": "fill_container",
                      "height": "fill_container",
                      "fill": "#36D984",
                      "cornerRadius": 9,
                      "justifyContent": "center",
                      "alignItems": "center",
                      "children": [
                        {
                          "type": "text",
                          "id": "cY2XK",
                          "name": "modeLocalTxt",
                          "fill": "#062012",
                          "content": "LOCAL",
                          "fontFamily": "Inter",
                          "fontSize": 12,
                          "fontWeight": "700",
                          "letterSpacing": 0.5
                        }
                      ]
                    },
                    {
                      "type": "frame",
                      "id": "JGdKN",
                      "name": "modeBackend",
                      "width": "fill_container",
                      "height": "fill_container",
                      "fill": "#1A1C24",
                      "cornerRadius": 9,
                      "justifyContent": "center",
                      "alignItems": "center",
                      "children": [
                        {
                          "type": "text",
                          "id": "hU384",
                          "name": "modeBackendTxt",
                          "fill": "#AEB5C4",
                          "content": "BACKEND REAL",
                          "fontFamily": "Inter",
                          "fontSize": 12,
                          "fontWeight": "700",
                          "letterSpacing": 0.4
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "frame",
              "id": "Hiy2u",
              "name": "stepsCard",
              "width": "fill_container",
              "fill": "#131722",
              "cornerRadius": 12,
              "stroke": {
                "thickness": 1,
                "fill": "#2A3140"
              },
              "layout": "vertical",
              "gap": 6,
              "padding": 12,
              "children": [
                {
                  "type": "text",
                  "id": "7KgsF",
                  "name": "stepsTitle",
                  "fill": "#DDE3F0",
                  "content": "Cómo probar aquí mismo",
                  "fontFamily": "Inter",
                  "fontSize": 12,
                  "fontWeight": "700"
                },
                {
                  "type": "text",
                  "id": "1yGeC",
                  "name": "steps1",
                  "fill": "#AEB5C4",
                  "content": "Tap 1: rellena campos demo",
                  "fontFamily": "Inter",
                  "fontSize": 12,
                  "fontWeight": "normal"
                },
                {
                  "type": "text",
                  "id": "Sldup",
                  "name": "steps2",
                  "fill": "#AEB5C4",
                  "content": "Tap 2: simula envío",
                  "fontFamily": "Inter",
                  "fontSize": 12,
                  "fontWeight": "normal"
                },
                {
                  "type": "text",
                  "id": "rE1Ne",
                  "name": "steps3",
                  "fill": "#AEB5C4",
                  "content": "Tap 3: revisa resultado",
                  "fontFamily": "Inter",
                  "fontSize": 12,
                  "fontWeight": "normal"
                }
              ]
            },
            {
              "type": "frame",
              "id": "x51D6",
              "name": "autoFillBtn",
              "width": "fill_container",
              "height": 46,
              "fill": "#7C5CFA",
              "cornerRadius": 12,
              "justifyContent": "center",
              "alignItems": "center",
              "children": [
                {
                  "type": "text",
                  "id": "kVdoU",
                  "name": "autoFillTxt",
                  "fill": "#FFFFFF",
                  "content": "Tap 1 · Autorrellenar demo",
                  "fontFamily": "Inter",
                  "fontSize": 14,
                  "fontWeight": "700"
                }
              ]
            },
            {
              "type": "frame",
              "id": "jAHYK",
              "name": "whereCard",
              "width": "fill_container",
              "fill": "#102033",
              "cornerRadius": 12,
              "stroke": {
                "thickness": 1,
                "fill": "#2D4C73"
              },
              "layout": "vertical",
              "gap": 6,
              "padding": 12,
              "children": [
                {
                  "type": "text",
                  "id": "PvDeD",
                  "name": "whereTitle",
                  "fill": "#DCEBFF",
                  "content": "¿Dónde hacer el testeo?",
                  "fontFamily": "Inter",
                  "fontSize": 13,
                  "fontWeight": "700"
                },
                {
                  "type": "text",
                  "id": "wqW6Y",
                  "name": "whereLine1",
                  "fill": "#BBD2F2",
                  "content": "Aquí mismo, dentro de esta app en Pencil.",
                  "fontFamily": "Inter",
                  "fontSize": 12,
                  "fontWeight": "normal"
                },
                {
                  "type": "text",
                  "id": "UV15K",
                  "name": "whereLine2",
                  "fill": "#BBD2F2",
                  "content": "Pantalla de prueba: Formulario (esta vista).",
                  "fontFamily": "Inter",
                  "fontSize": 12,
                  "fontWeight": "normal"
                },
                {
                  "type": "text",
                  "id": "pW0LK",
                  "name": "whereLine3",
                  "fill": "#BBD2F2",
                  "content": "Resultado esperado: pantalla Éxito y luego Lista.",
                  "fontFamily": "Inter",
                  "fontSize": 12,
                  "fontWeight": "normal"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "frame",
      "id": "J4I4O",
      "x": 840,
      "y": 40,
      "name": "Screen/Exito",
      "width": 360,
      "height": 780,
      "fill": "#0D0D0F",
      "layout": "vertical",
      "gap": 20,
      "padding": [
        0,
        20,
        20,
        20
      ],
      "children": [
        {
          "type": "frame",
          "id": "fm3Yb",
          "name": "statusBar",
          "width": "fill_container",
          "height": 62,
          "justifyContent": "space_between",
          "alignItems": "center",
          "children": [
            {
              "type": "text",
              "id": "T77yo",
              "name": "timeText",
              "fill": "#F2F2F2",
              "content": "9:41",
              "fontFamily": "Inter",
              "fontSize": 16,
              "fontWeight": "600"
            },
            {
              "type": "text",
              "id": "lOOyN",
              "name": "statusIcons",
              "fill": "#F2F2F2",
              "content": "● ● ●",
              "fontFamily": "Inter",
              "fontSize": 12,
              "fontWeight": "normal"
            }
          ]
        },
        {
          "type": "frame",
          "id": "rUVaA",
          "name": "contentWrap",
          "width": "fill_container",
          "height": "fill_container",
          "layout": "vertical",
          "gap": 20,
          "padding": [
            8,
            0,
            20,
            0
          ],
          "justifyContent": "space_between",
          "children": [
            {
              "type": "frame",
              "id": "GNNl7",
              "name": "mainBlock",
              "width": "fill_container",
              "layout": "vertical",
              "gap": 18,
              "children": [
                {
                  "type": "frame",
                  "id": "6NRYL",
                  "name": "badge",
                  "fill": "#2A1C1C",
                  "cornerRadius": 999,
                  "padding": [
                    8,
                    12
                  ],
                  "children": [
                    {
                      "type": "text",
                      "id": "NysgO",
                      "name": "badgeText",
                      "fill": "#F07B53",
                      "content": "KONDRY LABS",
                      "fontFamily": "Inter",
                      "fontSize": 11,
                      "fontWeight": "600",
                      "letterSpacing": 0.6
                    }
                  ]
                },
                {
                  "type": "text",
                  "id": "QOcys",
                  "name": "title",
                  "fill": "#FFFFFF",
                  "content": "✅ Test realizado dentro de Pencil",
                  "fontFamily": "Inter",
                  "fontSize": 34,
                  "fontWeight": "700"
                },
                {
                  "type": "text",
                  "id": "0imY8",
                  "name": "desc",
                  "fill": "#B9BBC2",
                  "textGrowth": "fixed-width",
                  "width": "fill_container",
                  "content": "Este resultado confirma que el test se ejecutó en la propia app (Pencil).",
                  "lineHeight": 1.4,
                  "fontFamily": "Inter",
                  "fontSize": 16,
                  "fontWeight": "normal"
                },
                {
                  "type": "frame",
                  "id": "B28hg",
                  "name": "card",
                  "width": "fill_container",
                  "fill": "#17181C",
                  "cornerRadius": 16,
                  "stroke": {
                    "thickness": 1,
                    "fill": "#2C2E36"
                  },
                  "layout": "vertical",
                  "gap": 10,
                  "padding": 16,
                  "children": [
                    {
                      "type": "text",
                      "id": "6EFS8",
                      "name": "row1",
                      "fill": "#E7E8EC",
                      "content": "Runner (demo): Ana García Pérez",
                      "fontFamily": "Inter",
                      "fontSize": 14,
                      "fontWeight": "normal"
                    },
                    {
                      "type": "text",
                      "id": "h0yKu",
                      "name": "row2",
                      "fill": "#E7E8EC",
                      "content": "Mail: ana@correo.com",
                      "fontFamily": "Inter",
                      "fontSize": 14,
                      "fontWeight": "normal"
                    },
                    {
                      "type": "text",
                      "id": "lCwbd",
                      "name": "row3",
                      "fill": "#E7E8EC",
                      "content": "Teléfono: +34 612 345 678",
                      "fontFamily": "Inter",
                      "fontSize": 14,
                      "fontWeight": "normal"
                    },
                    {
                      "type": "text",
                      "id": "i31hZ",
                      "name": "row4",
                      "fill": "#E7E8EC",
                      "content": "Ciudad: Madrid · Deporte: Running",
                      "fontFamily": "Inter",
                      "fontSize": 14,
                      "fontWeight": "normal"
                    },
                    {
                      "type": "text",
                      "id": "ifzlt",
                      "name": "backendRow",
                      "fill": "#8FE3B0",
                      "textGrowth": "fixed-width",
                      "width": "fill_container",
                      "content": "Estado demo: UI OK · Navegación OK · 2026-03-14 09:41",
                      "lineHeight": 1.35,
                      "fontFamily": "Inter",
                      "fontSize": 13,
                      "fontWeight": "normal"
                    }
                  ]
                },
                {
                  "type": "frame",
                  "id": "isLmm",
                  "name": "modeInfo",
                  "width": "fill_container",
                  "fill": "#151922",
                  "cornerRadius": 12,
                  "stroke": {
                    "thickness": 1,
                    "fill": "#2C2E36"
                  },
                  "layout": "vertical",
                  "gap": 6,
                  "padding": 12,
                  "children": [
                    {
                      "type": "text",
                      "id": "TLd5F",
                      "name": "modeInfoTitle",
                      "fill": "#E7E8EC",
                      "content": "Verificación rápida",
                      "fontFamily": "Inter",
                      "fontSize": 13,
                      "fontWeight": "700"
                    },
                    {
                      "type": "text",
                      "id": "1uCOd",
                      "name": "modeInfoDesc",
                      "fill": "#AEB5C4",
                      "textGrowth": "fixed-width",
                      "width": "fill_container",
                      "content": "Checklist: formulario visible, validaciones visibles, transición a éxito correcta.",
                      "lineHeight": 1.35,
                      "fontFamily": "Inter",
                      "fontSize": 12,
                      "fontWeight": "normal"
                    }
                  ]
                },
                {
                  "type": "frame",
                  "id": "nyzWw",
                  "name": "verifyCard",
                  "width": "fill_container",
                  "fill": "#102033",
                  "cornerRadius": 12,
                  "stroke": {
                    "thickness": 1,
                    "fill": "#2D4C73"
                  },
                  "layout": "vertical",
                  "gap": 6,
                  "padding": 12,
                  "children": [
                    {
                      "type": "text",
                      "id": "ddPSE",
                      "name": "verifyTitle",
                      "fill": "#DCEBFF",
                      "content": "Dónde validar ahora",
                      "fontFamily": "Inter",
                      "fontSize": 13,
                      "fontWeight": "700"
                    },
                    {
                      "type": "text",
                      "id": "kb1DG",
                      "name": "verify1",
                      "fill": "#BBD2F2",
                      "content": "1) En esta pantalla: estado y mensaje final.",
                      "fontFamily": "Inter",
                      "fontSize": 12,
                      "fontWeight": "normal"
                    },
                    {
                      "type": "text",
                      "id": "H6Glr",
                      "name": "verify2",
                      "fill": "#BBD2F2",
                      "content": "2) En Lista: comprobar registro visible.",
                      "fontFamily": "Inter",
                      "fontSize": 12,
                      "fontWeight": "normal"
                    },
                    {
                      "type": "text",
                      "id": "Bx2zn",
                      "name": "verify3",
                      "fill": "#BBD2F2",
                      "content": "3) Si activas BACKEND REAL: validar en Google Sheets.",
                      "fontFamily": "Inter",
                      "fontSize": 12,
                      "fontWeight": "normal"
                    }
                  ]
                }
              ]
            },
            {
              "type": "frame",
              "id": "X9fvR",
              "name": "actions",
              "width": "fill_container",
              "layout": "vertical",
              "gap": 12,
              "children": [
                {
                  "type": "frame",
                  "id": "nFWEN",
                  "name": "ctaPrimary",
                  "width": "fill_container",
                  "height": 52,
                  "fill": "#F07B53",
                  "cornerRadius": 12,
                  "justifyContent": "center",
                  "alignItems": "center",
                  "children": [
                    {
                      "type": "text",
                      "id": "iILTW",
                      "name": "ctaPrimaryText",
                      "fill": "#111111",
                      "content": "Tap 4 · Repetir test",
                      "fontFamily": "Inter",
                      "fontSize": 15,
                      "fontWeight": "600"
                    }
                  ]
                },
                {
                  "type": "frame",
                  "id": "kPdcY",
                  "name": "ctaSecondary",
                  "width": "fill_container",
                  "height": 52,
                  "fill": "#1A1B20",
                  "cornerRadius": 12,
                  "stroke": {
                    "thickness": 1,
                    "fill": "#2C2E36"
                  },
                  "justifyContent": "center",
                  "alignItems": "center",
                  "children": [
                    {
                      "type": "text",
                      "id": "6pcS7",
                      "name": "ctaSecondaryText",
                      "fill": "#F2F2F2",
                      "content": "Ir a Lista (validación final)",
                      "fontFamily": "Inter",
                      "fontSize": 15,
                      "fontWeight": "600"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "frame",
      "id": "yp77X",
      "x": 1279,
      "y": 40,
      "name": "Screen/Lista",
      "width": 360,
      "height": 780,
      "fill": "#0D0D0F",
      "layout": "vertical",
      "children": [
        {
          "type": "frame",
          "id": "8D2LZ",
          "name": "Status Bar",
          "width": "fill_container",
          "height": 62,
          "padding": [
            0,
            16
          ],
          "justifyContent": "space_between",
          "alignItems": "center",
          "children": [
            {
              "type": "text",
              "id": "6cdnr",
              "name": "time",
              "fill": "#F5F5F7",
              "content": "9:41",
              "fontFamily": "SF Pro",
              "fontSize": 15,
              "fontWeight": "600"
            },
            {
              "type": "text",
              "id": "xucEp",
              "name": "icons",
              "fill": "#B8BCC8",
              "content": "5G 100%",
              "fontFamily": "Inter",
              "fontSize": 12,
              "fontWeight": "600"
            }
          ]
        },
        {
          "type": "frame",
          "id": "Bzq37",
          "name": "App Content",
          "width": "fill_container",
          "height": "fill_container",
          "layout": "vertical",
          "gap": 16,
          "padding": 16,
          "children": [
            {
              "type": "text",
              "id": "tIBu0",
              "name": "header",
              "fill": "#F7F7FA",
              "content": "Validación final",
              "fontFamily": "Inter",
              "fontSize": 28,
              "fontWeight": "700"
            },
            {
              "type": "frame",
              "id": "AXNAd",
              "name": "Final Header",
              "width": "fill_container",
              "fill": "#17181C",
              "cornerRadius": 12,
              "stroke": {
                "thickness": 1,
                "fill": "#2A2C33"
              },
              "layout": "vertical",
              "gap": 6,
              "padding": 12,
              "children": [
                {
                  "type": "text",
                  "id": "UGTPf",
                  "name": "finalTitle",
                  "fill": "#F7F7FA",
                  "content": "Checklist de validación",
                  "fontFamily": "Inter",
                  "fontSize": 16,
                  "fontWeight": "700"
                },
                {
                  "type": "text",
                  "id": "F8uNh",
                  "name": "finalSubtitle",
                  "fill": "#A0A6B4",
                  "textGrowth": "fixed-width",
                  "width": "fill_container",
                  "content": "Revisa que todos los puntos estén completos antes de enviar tu registro final.",
                  "lineHeight": 1.3,
                  "fontFamily": "Inter",
                  "fontSize": 12,
                  "fontWeight": "500"
                }
              ]
            },
            {
              "type": "frame",
              "id": "YhUJ9",
              "name": "Checklist completado",
              "width": "fill_container",
              "fill": "#14151A",
              "cornerRadius": 12,
              "stroke": {
                "thickness": 1,
                "fill": "#242731"
              },
              "layout": "vertical",
              "gap": 10,
              "padding": 12,
              "children": [
                {
                  "type": "frame",
                  "id": "i0xBo",
                  "name": "checkHeader",
                  "width": "fill_container",
                  "justifyContent": "space_between",
                  "alignItems": "center",
                  "children": [
                    {
                      "type": "text",
                      "id": "wrt96",
                      "name": "checkTitle",
                      "fill": "#F7F7FA",
                      "content": "Checklist completado",
                      "fontFamily": "Inter",
                      "fontSize": 14,
                      "fontWeight": "700"
                    },
                    {
                      "type": "frame",
                      "id": "8KryU",
                      "name": "badge",
                      "fill": "#203826",
                      "cornerRadius": 999,
                      "padding": [
                        4,
                        8
                      ],
                      "justifyContent": "center",
                      "alignItems": "center",
                      "children": [
                        {
                          "type": "text",
                          "id": "i7gD7",
                          "name": "badgeText",
                          "fill": "#8FE6A6",
                          "content": "4/4 OK",
                          "fontFamily": "Inter",
                          "fontSize": 11,
                          "fontWeight": "700"
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "text",
                  "id": "6Anc7",
                  "name": "item1",
                  "fill": "#D9DCE4",
                  "content": "✓ Datos personales completos",
                  "fontFamily": "Inter",
                  "fontSize": 13,
                  "fontWeight": "500"
                },
                {
                  "type": "text",
                  "id": "mjGSc",
                  "name": "item2",
                  "fill": "#D9DCE4",
                  "content": "✓ Consentimiento confirmado",
                  "fontFamily": "Inter",
                  "fontSize": 13,
                  "fontWeight": "500"
                },
                {
                  "type": "text",
                  "id": "RIp7s",
                  "name": "item3",
                  "fill": "#D9DCE4",
                  "content": "✓ Evidencia adjunta",
                  "fontFamily": "Inter",
                  "fontSize": 13,
                  "fontWeight": "500"
                },
                {
                  "type": "text",
                  "id": "ltJ3N",
                  "name": "item4",
                  "fill": "#D9DCE4",
                  "content": "✓ Revisión de respuestas finalizada",
                  "fontFamily": "Inter",
                  "fontSize": 13,
                  "fontWeight": "500"
                }
              ]
            },
            {
              "type": "frame",
              "id": "oYDdq",
              "name": "Summary",
              "width": "fill_container",
              "height": "fill_container",
              "fill": "#14151A",
              "cornerRadius": 12,
              "stroke": {
                "thickness": 1,
                "fill": "#242731"
              },
              "layout": "vertical",
              "gap": 8,
              "padding": 12,
              "children": [
                {
                  "type": "text",
                  "id": "dEAYr",
                  "name": "sumLabel",
                  "fill": "#8C92A3",
                  "content": "Estado",
                  "fontFamily": "Inter",
                  "fontSize": 12,
                  "fontWeight": "600"
                },
                {
                  "type": "text",
                  "id": "oXxYX",
                  "name": "sumTitle",
                  "fill": "#F7F7FA",
                  "content": "Validación lista para finalizar",
                  "fontFamily": "Inter",
                  "fontSize": 18,
                  "fontWeight": "700"
                },
                {
                  "type": "text",
                  "id": "M0HV7",
                  "name": "sumDesc",
                  "fill": "#A0A6B4",
                  "textGrowth": "fixed-width",
                  "width": "fill_container",
                  "content": "Si deseas repetir el proceso, puedes reiniciar el test y completar los pasos nuevamente desde el inicio.",
                  "lineHeight": 1.35,
                  "fontFamily": "Inter",
                  "fontSize": 12,
                  "fontWeight": "500"
                }
              ]
            },
            {
              "type": "frame",
              "id": "TQHbR",
              "name": "Verificación final",
              "width": "fill_container",
              "fill": "#14151A",
              "cornerRadius": 12,
              "stroke": {
                "thickness": 1,
                "fill": "#242731"
              },
              "layout": "vertical",
              "gap": 6,
              "padding": 12,
              "children": [
                {
                  "type": "text",
                  "id": "gPJ4q",
                  "name": "infoTitle",
                  "fill": "#F7F7FA",
                  "content": "Verificación final",
                  "fontFamily": "Inter",
                  "fontSize": 15,
                  "fontWeight": "700"
                },
                {
                  "type": "text",
                  "id": "M6cct",
                  "name": "infoDesc",
                  "fill": "#A0A6B4",
                  "textGrowth": "fixed-width",
                  "width": "fill_container",
                  "content": "Aquí se confirma el registro después del flujo de prueba.",
                  "lineHeight": 1.35,
                  "fontFamily": "Inter",
                  "fontSize": 12,
                  "fontWeight": "500"
                }
              ]
            },
            {
              "type": "frame",
              "id": "pOhTr",
              "name": "restartBtn",
              "width": "fill_container",
              "height": 50,
              "fill": "#e8c37dff",
              "cornerRadius": 14,
              "justifyContent": "center",
              "alignItems": "center",
              "children": [
                {
                  "type": "text",
                  "id": "C8Pj8",
                  "name": "restartBtnText",
                  "fill": "#17130A",
                  "content": "Reiniciar test desde el inicio",
                  "fontFamily": "Inter",
                  "fontSize": 14,
                  "fontWeight": "700"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}