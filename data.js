var APP_DATA = {
  "scenes": [
    {
      "id": "0-front",
      "name": "Front",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -2.931498265702512,
        "pitch": 0.07490229479414978,
        "fov": 1.350113863664377
      },
      "linkHotspots": [
        {
          "yaw": -2.7437861964578563,
          "pitch": 0.09086504663280515,
          "rotation": 0,
          "target": "3-bottom-of-stairway"
        },
        {
          "yaw": 2.5735242826018485,
          "pitch": 0.07518261526449876,
          "rotation": 0,
          "target": "7-side-left"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-back",
      "name": "Back",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -2.5158617840846613,
        "pitch": 0.19225874807224486,
        "fov": 1.350113863664377
      },
      "linkHotspots": [
        {
          "yaw": 1.3426867476849473,
          "pitch": 0.14102969034339452,
          "rotation": 0,
          "target": "3-bottom-of-stairway"
        },
        {
          "yaw": -1.3297848749235222,
          "pitch": 0.0267908079143524,
          "rotation": 0,
          "target": "7-side-left"
        },
        {
          "yaw": -3.0017867741450637,
          "pitch": 0.11081872088334244,
          "rotation": 0,
          "target": "0-front"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-upper-floor",
      "name": "Upper Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": 0.20749250694562704,
        "pitch": 0.4309599803851114,
        "fov": 1.350113863664377
      },
      "linkHotspots": [
        {
          "yaw": 0.1733158276316118,
          "pitch": 0.5805226170300006,
          "rotation": 0,
          "target": "3-bottom-of-stairway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bottom-of-stairway",
      "name": "Bottom of Stairway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -2.489756158415254,
        "pitch": 0.11302071666401936,
        "fov": 1.350113863664377
      },
      "linkHotspots": [
        {
          "yaw": -1.5924657057216969,
          "pitch": -0.41861129982147993,
          "rotation": 0,
          "target": "2-upper-floor"
        },
        {
          "yaw": -2.7336757644004663,
          "pitch": 0.3571796568842096,
          "rotation": 0,
          "target": "1-back"
        },
        {
          "yaw": -1.1934169923532885,
          "pitch": 0.06259788591165183,
          "rotation": 0,
          "target": "4-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-hallway",
      "name": "Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -2.8564345162338256,
        "pitch": 0.17432168128356196,
        "fov": 1.350113863664377
      },
      "linkHotspots": [
        {
          "yaw": 3.109279421659954,
          "pitch": 0.09997744487500171,
          "rotation": 0,
          "target": "6-racquetball-court-entrance"
        },
        {
          "yaw": 0.15826441935788615,
          "pitch": 0.08939145969774209,
          "rotation": 0,
          "target": "3-bottom-of-stairway"
        },
        {
          "yaw": 1.2017192898324325,
          "pitch": 0.02478440695655948,
          "rotation": 0,
          "target": "7-side-left"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-racquetball-court",
      "name": "Racquetball Court",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -2.8238939093281665,
        "pitch": -0.151166449493628,
        "fov": 1.350113863664377
      },
      "linkHotspots": [
        {
          "yaw": 0.011533012214378857,
          "pitch": 0.03729414570632272,
          "rotation": 0,
          "target": "6-racquetball-court-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-racquetball-court-entrance",
      "name": "Racquetball Court Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -0.8671293902811659,
        "pitch": 0.1858288324334758,
        "fov": 1.350113863664377
      },
      "linkHotspots": [
        {
          "yaw": -1.6082226753026578,
          "pitch": 0.029491156578940192,
          "rotation": 0,
          "target": "5-racquetball-court"
        },
        {
          "yaw": 3.1396704468515333,
          "pitch": 0.04198533287599204,
          "rotation": 0,
          "target": "4-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-side-left",
      "name": "Side (Left)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": 2.7551113100401885,
        "pitch": 0.05780350156029179,
        "fov": 1.350113863664377
      },
      "linkHotspots": [
        {
          "yaw": 0.09759770305973525,
          "pitch": 0.054222764280773106,
          "rotation": 0,
          "target": "4-hallway"
        },
        {
          "yaw": 2.8336796540276614,
          "pitch": 0.05315027180289178,
          "rotation": 0,
          "target": "0-front"
        },
        {
          "yaw": 1.366594717491159,
          "pitch": 0.07498030300298097,
          "rotation": 0,
          "target": "1-back"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Gym (Unedited)",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
