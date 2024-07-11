(() => {
    /* 
      Struktur der Einkaufsliste Anwendung 
      
      Zuordnung der Button-Events zu den Funktionen
      nach den Funktionsdeklarationen vornehmen.
      
      (keydown in #item)          => enterPressed
      #enter                      => enterItem
      (aus enterItem aufgerufen)  => addListItem 
      (Click Event der Items)     => selectItem
      #delete     => deleteItem
      #up         => moveUp
      #down       => moveDown
      #store      => speicherListe
      #load       => ladeListe
      #deleteall  => leereListe    
      
    */
   /* Referenzen auf Bedienelemente */
    const ITEM = document.getElementById('item');
    const EINKAUFLISTE = document.getElementById('einkaufsliste');
    
    /* Funktionsdeklarationen */
    const enterPressed = (evt) => {
        "use strict";
        /* Wenn ENTER Taste gedrückt wurde, enterItem aufrufen */
        if (evt.keyCode === 13) {
            enterItem();
        }
    };

    const enterItem = () => {
        /* Wert aus Formularfeld #item auslesen.
           Wenn der Wert nicht leer ist,
           an addListItem übergeben.
           Formularfeld leeren und fokussieren. */
           "use strict";
        let str = ITEM.value.trim();
        if (str.length > 0) {
            addListItem(str);
            ITEM.value = '';
            ITEM.focus();
        }
    };

    const addListItem = (strItem) => {
        /* Listenelement erstellen und an #einkaufsliste anhängen.
           Dem Listenelement den Click-Handler selectItem zuweisen */
           "use strict";
        let nLi = document.createElement('li');
        nLi.textContent = strItem;
        nLi.addEventListener('click', selectItem);
        EINKAUFLISTE.appendChild(nLi);
    };

    const selectItem = (evt) => {
        /* Das geklickte Listenelement bekommt die Klasse "markiert".
           Aber immer nur ein Element darf die Klasse "markiert" haben. 
           Wenn das geklickte Element NICHT die Klasse "markiert" hat:
           – aus allen anderen die Klasse entfernen
           – dann dem geklickten Element die Klasse geben
           sonst die Klasse aus der classList entfernen. */
           "use strict";
           
            const current = evt.target;
            if (current.classList.contains('markiert')) {
                current.classList.remove('markiert');
            } else {
                current.classList.add('markiert');
            }
        };
        

    const deleteItem = () => {
        /* Das Element aus #einkaufsliste mit der Klasse 'markiert' löschen
           nachdem zuvor sein ClickHandler entfernt wurde. 
           Wenn nichts markiertes zu löschen ist, mit window.alert() Meldung machen. */
           "use strict";
           const selectedItems = EINKAUFLISTE.querySelectorAll('li.markiert');
           if (selectedItems.length === 0) {
               //alert('Kein Element markiert.');
               return;
           }
           selectedItems.forEach(mItem => {
               mItem.removeEventListener('click', selectItem);
               EINKAUFLISTE.removeChild(mItem);
           });
        //mItem.remove();
        //mItem.parentNode.removeChild(mItem);
    };

    const moveUp = () => {
        "use strict";
        const selectedItems = Array.from(EINKAUFLISTE.querySelectorAll('li.markiert'));
        if (selectedItems.length === 0) return;
    
            selectedItems.forEach(mItem => {
            const vorItem = mItem.previousElementSibling;
            if (vorItem) {
                EINKAUFLISTE.insertBefore(mItem, vorItem);
            } else {
                EINKAUFLISTE.appendChild(mItem);
            }
        });
    };
    
    const moveDown = () => {
        "use strict";
        const selectedItems = Array.from(EINKAUFLISTE.querySelectorAll('li.markiert'));
        if (selectedItems.length === 0) return;
    
        
        selectedItems.reverse().forEach(mItem => {
            const nacstItem = mItem.nextElementSibling;
            if (nacstItem) {
                EINKAUFLISTE.insertBefore(nacstItem, mItem);
            } else {
                
                EINKAUFLISTE.insertBefore(mItem, EINKAUFLISTE.firstElementChild);
            }
        });
    };
    

    const speicherListe = () => {
        /* Wenn das item 'einkaufsliste' in localStorage noch nicht existiert
           ODER der Anwender zustimmt, sie zu überschreiben, window.confirm(),
           das innerHTML der #einkaufsliste in localStorage speichern */
           "use strict";
    };

    const ladeListe = () => {
        /* Liste aus localStorage laden.
           User benachrichtigen, wenn keine Liste in localStorage vorhanden
           oder Bestätigung einholen, dass die angezeigte Liste überschrieben wird.
           Click-Event Handler für Listenitems wieder herstellen! */
           "use strict";
        
    };

    const leereListe = () => {
        /* localStorage Eintrag nach Rückfrage löschen */
       "use strict";
    };

    /* Eventlistener zuweisen */
    ITEM.addEventListener('keydown', enterPressed);
    document.getElementById('enter').addEventListener('click', enterItem);
    document.getElementById('delete').addEventListener('click', deleteItem);
    document.getElementById('up').addEventListener('click', moveUp);
    document.getElementById('down').addEventListener('click', moveDown);
    document.getElementById('store').addEventListener('click', speicherListe);
    document.getElementById('load').addEventListener('click', ladeListe);
    document.getElementById('deleteall').addEventListener('click', leereListe);
})();
