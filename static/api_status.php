{
  "success": true,
  "message": "ok",
  "data": {
    "atm": {
      "ok": false,
      "internal_problem": false
    },
    "external": [
      {
        "id": "lnpay_ping",
        "ok": false,
        "label": "LNPAY Server",
        "description": "Ketersediaan API dapat diakses oleh ATM",
        "last_check": 1650545405,
        "series": [
          {
            "ok": true,
            "status_code": 200,
            "created_at": 1650545405
          },
          {
            "ok": true,
            "status_code": 200,
            "created_at": 1650544803
          },
          {
            "ok": true,
            "status_code": 200,
            "created_at": 1650543902
          },
          {
            "ok": true,
            "status_code": 200,
            "created_at": 1650543002
          },
          {
            "ok": true,
            "status_code": 200,
            "created_at": 1650542102
          },
          {
            "ok": true,
            "status_code": 200,
            "created_at": 1650541203
          },
          {
            "ok": true,
            "status_code": 200,
            "created_at": 1650540303
          },
          {
            "ok": true,
            "status_code": 200,
            "created_at": 1650539402
          },
          {
            "ok": true,
            "status_code": 200,
            "created_at": 1650538502
          },
          {
            "ok": true,
            "status_code": 200,
            "created_at": 1650537602
          }
        ]
      },
      {
        "id": "lnpay_generate_lnurl",
        "ok": true,
        "label": "LNPAY Generate LNURL",
        "description": "Ketersediaan untuk membuat sebuah LNURL",
        "last_check": 1650545408,
        "series": [
          {
            "ok": true,
            "status_code": 200,
            "created_at": 1650545408
          }
        ]
      },
      {
        "id": "lnpay_generate_invoice",
        "ok": true,
        "label": "LNPAY Generate Invoice",
        "description": "Ketersediaan untuk membuat sebuah invoice",
        "last_check": 1650545409,
        "series": [
          {
            "ok": true,
            "status_code": 201,
            "created_at": 1650545409
          }
        ]
      },
      {
        "id": "lnpay_withdraw_lnurl",
        "ok": true,
        "label": "LNPAY Withdraw LNURL",
        "description": "Ketersediaan untuk membayar invoice lewat proses LNURL",
        "last_check": 1650545411,
        "series": [
          {
            "ok": true,
            "status_code": 201,
            "created_at": 1650545411
          }
        ]
      }
    ]
  }
}