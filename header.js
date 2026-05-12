(function () {
    function applyLayout() {
        var carousel = window.innerWidth <= 1024;
        var desktopTitle    = document.getElementById('desktop-title');
        var desktopContacts = document.getElementById('desktop-contacts');
        var mobileBar       = document.getElementById('mobile-header-bar');
        var contactsPanel   = document.getElementById('contacts-panel');
        if (desktopTitle)    desktopTitle.style.display    = carousel ? 'none' : '';
        if (desktopContacts) desktopContacts.style.display = carousel ? 'none' : '';
        if (mobileBar)       mobileBar.style.display       = carousel ? 'flex' : 'none';
        if (contactsPanel)   contactsPanel.style.display   = carousel ? ''     : 'none';
    }

    document.addEventListener('DOMContentLoaded', function () {
        applyLayout();
        window.addEventListener('resize', applyLayout);

        var toggle = document.getElementById('contacts-toggle');
        var panel  = document.getElementById('contacts-panel');
        if (toggle && panel) {
            toggle.addEventListener('click', function () {
                toggle.classList.toggle('open');
                panel.classList.toggle('open');
            });
        }
    });
})();
