import reglogo from "./assets/reglogo.svg"
import reg from "./assets/reg.otf"
import screenlogo from "./assets/screenlogo.svg"
import screen from "./assets/screen.otf"

export default function mysketch(p) {

  let reg
  let screen
  let reglogo
  let screenlogo

  let bString, iString, oString, nString, cString
  let bionicStrings = Array(2)
  let charPositions = []
  let randomFonts = []
  let textChars = []
  let textHeight
  let logo
  let fps = 20

  p.disableFriendlyErrors = true // disables FES

  p.preload = function(){
    reg = p.loadFont('/static/reg-27b93a163e1b08ebf79f909765b7582e.otf')
    reglogo = p.loadImage('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZyBpZD0icmVnIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMTguMzQ3MjIyMiw1MC4zODQyNDIyIEMxOC4zNDcyMjIyLDYzLjI1NTY3MTcgMjguODUwNTUxLDczLjY4OTY5NTYgNDEuODA2NjUyLDczLjY4OTY5NTYgQzUzLjMxOTQ2NTEsNzMuNjg5Njk1NiA2Mi42NTI3Nzc4LDY0LjQxNzk2NzYgNjIuNjUyNzc3OCw1Mi45ODAzMDI4IEM2Mi42NTI3Nzc4LDQ5Ljg3OTA5MzggNjEuODY4Mjg1LDQ2Ljk1OTk0MzEgNjAuNDg1NzAzNyw0NC40MDgwMDA4IEw2MC4zOTY2MzE5LDQ0LjI0NjM2IEw2MC4zMDgxODg4LDQ0LjMyNzk1NiBDNTYuMjA2MDY0Myw0OC4wNDU4NjQ3IDUwLjc3NzQ1ODMsNTAuMzQ0MDgyMyA0NC44MDk5MDA3LDUwLjQ0MDE5NTcgTDQ0LjQxOTk1NjEsNTAuNDQzMzMzOSBMNDEuODA2NjUyLDUwLjQ0MzMzMzkgQzM2LjAwMDAwOTEsNTAuNDQzMzMzOSAzMS4yOTMxMjg3LDQ1Ljc2NzUxMTEgMzEuMjkzMTI4Nyw0MCBDMzEuMjkzMTI4NywzNC4yOTAxNjQgMzUuOTA2MzQyMiwyOS42NTAyOTE4IDQxLjYzMjc4NjMsMjkuNTU4MDY1MyBMNDEuODA2NjUyLDI5LjU1NjY2NjEgTDQ0LjQxOTk1NjEsMjkuNTU2NjY2MSBDNTAuNTQwODA1MSwyOS41NTY2NjYxIDU2LjExNjg4NzcsMzEuODczMzExMiA2MC4zMDgxODg4LDM1LjY3MjA0NCBMNjAuMzk2NjMxOSwzNS43NTMyODY4IEw2MC40ODU3MDM3LDM1LjU5MTk5OTIgQzYxLjgyMzY4NTYsMzMuMTIyMzc3NiA2Mi42MDE1NDMsMzAuMzA4ODU2NCA2Mi42NTAzMzUsMjcuMzE5MjM5NyBMNjIuNjUyNzc3OCwyNy4wMTk2OTcyIEM2Mi42NTI3Nzc4LDE1LjU4MjAzMjQgNTMuMzE5NDY1MSw2LjMxMDMwNDM1IDQxLjgwNjY1Miw2LjMxMDMwNDM1IEMyOC45ODAxMTIsNi4zMTAzMDQzNSAxOC41NTc1MzQxLDE2LjUzNjY5MTIgMTguMzUwMzY1MiwyOS4yMzAzNTQxIEwxOC4zNDcyMjIyLDI5LjYxNTc1NzggTDE4LjM0NzIyMjIsNTAuMzg0MjQyMiBaIE00NC40MTk5NTYxLDM0Ljg2Njk3MDUgTDQxLjgwNjY1MiwzNC44NjY5NzA1IEMzOC45NTM1NjcsMzQuODY2OTcwNSAzNi42NDAzNTA5LDM3LjE2NDkyMzEgMzYuNjQwMzUwOSw0MCBDMzYuNjQwMzUwOSw0Mi43OTU3MDA4IDM4Ljg4OTc1NzIsNDUuMDY5MDkzOSA0MS42ODgwOTA3LDQ1LjEzMTcwNDQgTDQxLjgwNjY1Miw0NS4xMzMwMjk1IEw0NC40MTk5NTYxLDQ1LjEzMzAyOTUgQzQ5LjI3NDQ0MTcsNDUuMTMzMDI5NSA1My42ODU4ODY4LDQzLjI0ODI1NzIgNTYuOTUzMjAxNyw0MC4xNzUwODQ1IEw1Ny4xMzYzNTQyLDQwLjAwMDAxMzEgTDU3LjExMjk2MzgsMzkuOTc3MDEwMiBDNTMuODk3Mzk2MiwzNi44Nzg1OTU1IDQ5LjUzNjIzNTcsMzQuOTQ2OTQ5MyA0NC43MjE0NjM4LDM0Ljg2OTM5NzEgTDQ0LjQxOTk1NjEsMzQuODY2OTcwNSBaIE0xMy4wMDM4NTkyLDI5LjE0MjU0OTMgQzEzLjI1ODI0MTEsMTMuNTU2OTM3NCAyNi4wNTYwODk3LDEgNDEuODA2NjUyLDEgQzU2LjI3MzAyMjksMSA2OCwxMi42NDk1OTgyIDY4LDI3LjAxOTY5NzIgQzY4LDMxLjgwNjE0MDkgNjYuNTU0NzUyLDM2LjI1NzMxMjEgNjQuMDc0MDgxNCwzOS45NjYwNDg0IEw2NC4wNTA2OTQ0LDQwLjAwMDAxMzEgTDY0LjA3NDA4MTQsNDAuMDMzOTUxNiBDNjYuNDg3NzA2OSw0My42NDI0NTE3IDY3LjkyMTEyMjIsNDcuOTUzNzk3NSA2Ny45OTY4NDEsNTIuNTkyOTU1NSBMNjgsNTIuOTgwMzAyOCBDNjgsNjcuMzUwNDAxOCA1Ni4yNzMwMjI5LDc5IDQxLjgwNjY1Miw3OSBDMjYuMDU2MDg5Nyw3OSAxMy4yNTgyNDExLDY2LjQ0MzA2MjYgMTMuMDAzODU5Miw1MC44NTc0NTA3IEwxMyw1MC4zODQyNDIyIEwxMywyOS42MTU3NTc4IEwxMy4wMDM4NTkyLDI5LjE0MjU0OTMgWiIgaWQ9ImJpb25pYy1sb2dvLXBhdGhzLWNvcHktMyIgZmlsbD0iIzAwMDAwMCIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTc1LDEwIEM3Ny43NjA1NjM0LDEwIDgwLDcuNzYwNTYzMzggODAsNSBDODAsMi4yMzk0MzY2MiA3Ny43NjA1NjM0LDAgNzUsMCBDNzIuMjM5NDM2NiwwIDcwLDIuMjM5NDM2NjIgNzAsNSBDNzAsNy43NjA1NjMzOCA3Mi4yMzk0MzY2LDEwIDc1LDEwIFogTTc1LDkuMDg0NTA3MDQgQzcyLjcxODMwOTksOS4wODQ1MDcwNCA3MC45MTU0OTMsNy4yODE2OTAxNCA3MC45MTU0OTMsNSBDNzAuOTE1NDkzLDIuNzE4MzA5ODYgNzIuNzE4MzA5OSwwLjkxNTQ5Mjk1OCA3NSwwLjkxNTQ5Mjk1OCBDNzcuMjgxNjkwMSwwLjkxNTQ5Mjk1OCA3OS4wODQ1MDcsMi43MTgzMDk4NiA3OS4wODQ1MDcsNSBDNzkuMDg0NTA3LDcuMjgxNjkwMTQgNzcuMjgxNjkwMSw5LjA4NDUwNzA0IDc1LDkuMDg0NTA3MDQgWiBNNzUsNy41NjMzODAyOCBDNzUuOTQzNjYyLDcuNTYzMzgwMjggNzYuODg3MzIzOSw3LjAxNDA4NDUxIDc3LjAyODE2OSw1LjgwMjgxNjkgTDc2LjA5ODU5MTUsNS44MDI4MTY5IEM3Ni4wNDIyNTM1LDYuNDc4ODczMjQgNzUuNTc3NDY0OCw2LjgwMjgxNjkgNzUsNi44MDI4MTY5IEM3NC4zOTQzNjYyLDYuODAyODE2OSA3My44NzMyMzk0LDYuMzY2MTk3MTggNzMuODczMjM5NCw1LjcxODMwOTg2IEw3My44NzMyMzk0LDQuMjgxNjkwMTQgQzczLjg3MzIzOTQsMy41Nzc0NjQ3OSA3NC40MzY2MTk3LDMuMTk3MTgzMSA3NC45ODU5MTU1LDMuMTk3MTgzMSBDNzUuNTIxMTI2OCwzLjE5NzE4MzEgNzUuOTg1OTE1NSwzLjQyMjUzNTIxIDc2LjA1NjMzOCw0LjE1NDkyOTU4IEw3Ni45ODU5MTU1LDQuMTU0OTI5NTggQzc2Ljg4NzMyMzksMy4wMTQwODQ1MSA3Ni4wNzA0MjI1LDIuNDM2NjE5NzIgNzUuMDQyMjUzNSwyLjQzNjYxOTcyIEM3My42OTAxNDA4LDIuNDM2NjE5NzIgNzIuODg3MzIzOSwzLjQ2NDc4ODczIDcyLjg4NzMyMzksNS4wNDIyNTM1MiBDNzIuODg3MzIzOSw2LjQ5Mjk1Nzc1IDczLjYxOTcxODMsNy41NjMzODAyOCA3NSw3LjU2MzM4MDI4IFoiIGlkPSLCqSIgZmlsbD0iIzAwMDAwMCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIwLjUiPjwvcGF0aD4KICAgIDwvZz4KPC9zdmc+')
    screenlogo = p.loadImage('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZyBpZD0ic2NyZWVuIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNNTkuNDI4NTcxNCw2Ni40NDQ0NDQ0IEw1OS40Mjg1NzE0LDc0IEwyMS41NzE0Mjg2LDc0IEwyMS41NzE0Mjg2LDY2LjQ0NDQ0NDQgTDU5LjQyODU3MTQsNjYuNDQ0NDQ0NCBaIE02Nyw0My43Nzc3Nzc4IEw2Nyw2Ni40NDQ0NDQ0IEw1OS40Mjg1NzE0LDY2LjQ0NDQ0NDQgTDU5LjQyODU3MTQsNDMuNzc3Nzc3OCBMNjcsNDMuNzc3Nzc3OCBaIE0yMS41NzE0Mjg2LDEzLjU1NTU1NTYgTDIxLjU3MTQyODYsNjYuNDQ0NDQ0NCBMMTQsNjYuNDQ0NDQ0NCBMMTQsMTMuNTU1NTU1NiBMMjEuNTcxNDI4NiwxMy41NTU1NTU2IFogTTUxLjg1NzE0MjksNDMuNzc3Nzc3OCBMNTEuODU3MTQyOSw1MS4zMzMzMzMzIEwzNi43MTQyODU3LDUxLjMzMzMzMzMgTDM2LjcxNDI4NTcsNDMuNzc3Nzc3OCBMNTEuODU3MTQyOSw0My43Nzc3Nzc4IFogTTU5LjQyODU3MTQsMzYuMjIyMjIyMiBMNTkuNDI4NTcxNCw0My43Nzc3Nzc4IEw1MS44NTcxNDI5LDQzLjc3Nzc3NzggTDUxLjg1NzE0MjksMzYuMjIyMjIyMiBMNTkuNDI4NTcxNCwzNi4yMjIyMjIyIFogTTM2LjcxNDI4NTcsMzYuMjIyMjIyMiBMMzYuNzE0Mjg1Nyw0My43Nzc3Nzc4IEwyOS4xNDI4NTcxLDQzLjc3Nzc3NzggTDI5LjE0Mjg1NzEsMzYuMjIyMjIyMiBMMzYuNzE0Mjg1NywzNi4yMjIyMjIyIFogTTY3LDEzLjU1NTU1NTYgTDY3LDM2LjIyMjIyMjIgTDU5LjQyODU3MTQsMzYuMjIyMjIyMiBMNTkuNDI4NTcxNCwxMy41NTU1NTU2IEw2NywxMy41NTU1NTU2IFogTTUxLjg1NzE0MjksMjguNjY2NjY2NyBMNTEuODU3MTQyOSwzNi4yMjIyMjIyIEwzNi43MTQyODU3LDM2LjIyMjIyMjIgTDM2LjcxNDI4NTcsMjguNjY2NjY2NyBMNTEuODU3MTQyOSwyOC42NjY2NjY3IFogTTU5LjQyODU3MTQsNiBMNTkuNDI4NTcxNCwxMy41NTU1NTU2IEwyMS41NzE0Mjg2LDEzLjU1NTU1NTYgTDIxLjU3MTQyODYsNiBMNTkuNDI4NTcxNCw2IFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgZmlsbD0iIzAwMDAwMCI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4=')
    screen = p.loadFont('/static/screen-4ce1d0c4fa90b1429da5ec1e2b09c543.otf')
  }
  p.setup = function() {
    p.createCanvas(150, 44)
    p.frameRate(fps)

    bString = ['B', 'B']
    iString = ['i', 'ï', 'í', 'ĭ', 'ì', 'î', 'ĩ', 'ī', 'į', 'y']
    oString = ['o','ò','ó','ô','õ','ö', 'ō','ō','ŏ','ő', 'ø']
    nString = ['n','ñ', 'ń', 'ņ', 'ň']
    cString = ['c','ç','ć','ĉ','ċ','č','k']

    bionicStrings = [bString, iString, oString, nString, iString, cString]
    charPositions = [50, 65, 80, 100, 115, 130]
    textHeight = p.height/2 - 2

    p.calcSetup() //important on first load
  }

  p.getMarkovChar = function(arr) {
    let threshold = 0.8
    let passThreshold = Math.random()
    if (passThreshold > threshold) {
      return (parseInt(p.random(1,arr.length)))
    } else {
      return 0
    }
  }
  p.getMarkovFont = function() {
    let threshold = 0.8
    let passThreshold = Math.random()
    if(passThreshold > threshold) {
      return (screen)
    } else {
      return (reg)
    }
  }
  p.getMarkovLogo = function() {
    let threshold = 0.8
    let passThreshold = Math.random()
    if(passThreshold > threshold) {
      return screenlogo
    } else {
      return reglogo
    }
    
  }

  p.calcSetup = function() {
    
    logo = p.getMarkovLogo()

    for (let i = 0; i < bionicStrings.length; i++){
      randomFonts[i] = p.getMarkovFont()
      textChars[i] = p.getMarkovChar(bionicStrings[i])
    }
    
  }

  p.draw = function() {
    p.background(255)
    p.fill(0)

    p.image(logo, -5, 20 - 18, 40, 40)

    p.textSize(35)
    p.textAlign(p.CENTER, p.CENTER)

    for (let i = 0; i < bionicStrings.length; i++){
      p.textFont(randomFonts[i])
      p.text(bionicStrings[i][textChars[i]], charPositions[i], textHeight)
    }
    
    if (p.frameCount % fps == 0) {
      p.calcSetup()
    }
  }
}
