enviar.addEventListener('click',capturarForm);
function exito() {
    var sueldo = parseFloat(calculoSueldo.value);
    var hijos = parseFloat(calculoHijos.value);
    var sexo = calculoSexo.selectedIndex;
    var respuesta = document.getElementById('resultado');

    var incremento = 0.5;
    if (sueldo < 15000) { incremento = incremento + 1.00; }
    if (sexo == 2) { incremento = incremento + 1.08; console.log(incremento + ' acumulado 2.58 máx.'); }
    if (hijos > 0) { incremento = (hijos * 1.20) + incremento; console.log(hijos * 1.20 + ' Incremento por hijos'); }

    incremento=incremento*100;
    Math.round(incremento);
    incremento=incremento/100;
    sueldo = sueldo + ((sueldo * incremento) / 100);
    console.log(sueldo + ' nuevo sueldo anual');
    respuesta.innerHTML =
        'Anual: ' + sueldo + '\n' +
        'Mensual: ' + (Math.round((sueldo / 12)*100))/100 + '\n' +
        'Incremento total: ' + incremento + '%';
}
function limpiar() {
    document.getElementById("limpiar").reset();
    document.getElementById('resultado').innerHTML = '';

}

function capturarForm(){
    sueldo = document.getElementById('calculoSueldo').value;
    hijos = document.getElementById('calculoHijos').value;
    sexo = document.getElementById('calculoSexo').selectedIndex;

    validarDatos();
}
function validarDatos() {
    if ((isNaN(sueldo))|| sueldo =='')  {
        mostrarError('calculoSueldo');
    }
    if (hijos=='') {
        mostrarError('calculoHijos');
    }
    if (sexo == null || sexo == 0) {
        mostrarError('calculoSexo');
    }
     document.getElementById(id).classList.add('is-valid');
}
function mostrarError(id) {
    document.getElementById(id).classList.add('is-invalid');
    swal('Revise los campos');
}
/* 
var coll = document.getElementsByClassName("collapsible");
var ex;
function expandir() {
    for (ex = 0; ex < coll.length; ex++) {
        coll[ex].addEventListener("click", function() {
          this.classList.toggle("active");
          var content = this.nextElementSibling;
          if (content.style.display === "block") {
            content.style.display = "none";
          } else {
            content.style.display = "block";
          }
        });
      }
} */
var y=null;
function switchTema(){
    y=!y
    if (y) {
        document.documentElement.setAttribute('data-bs-theme', 'dark')
    } else {
        document.documentElement.setAttribute('data-bs-theme', 'light')
    }
}
/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */

(() => {
    'use strict'
  
    const storedTheme = localStorage.getItem('theme')
  
    const getPreferredTheme = () => {
      if (storedTheme) {
        return storedTheme
      }
  
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
  
    const setTheme = function (theme) {
      if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-bs-theme', 'dark')
      } else {
        document.documentElement.setAttribute('data-bs-theme', theme)
      }
    }
  
    setTheme(getPreferredTheme())
  
    const showActiveTheme = (theme, focus = false) => {
      const themeSwitcher = document.querySelector('#bd-theme')
  
      if (!themeSwitcher) {
        return
      }
  
      const themeSwitcherText = document.querySelector('#bd-theme-text')
      const activeThemeIcon = document.querySelector('.theme-icon-active use')
      const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
      const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')
  
      document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
        element.classList.remove('active')
        element.setAttribute('aria-pressed', 'false')
      })
  
      btnToActive.classList.add('active')
      btnToActive.setAttribute('aria-pressed', 'true')
      activeThemeIcon.setAttribute('href', svgOfActiveBtn)
      const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`
      themeSwitcher.setAttribute('aria-label', themeSwitcherLabel)
  
      if (focus) {
        themeSwitcher.focus()
      }
    }
  
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (storedTheme !== 'light' || storedTheme !== 'dark') {
        setTheme(getPreferredTheme())
      }
    })
  
    window.addEventListener('DOMContentLoaded', () => {
      showActiveTheme(getPreferredTheme())
  
      document.querySelectorAll('[data-bs-theme-value]')
        .forEach(toggle => {
          toggle.addEventListener('click', () => {
            const theme = toggle.getAttribute('data-bs-theme-value')
            localStorage.setItem('theme', theme)
            setTheme(theme)
            showActiveTheme(theme, true)
          })
        })
    })
  })()