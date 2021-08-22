(function() {
    getUsers()
        .then(handleErrors)
        .then(response => response.json())
        .then(renderUsersHTML)
        .then(insertUsers)
        .catch(error => {
            console.error(error);
        })

    async function getUsers() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';

        try {
            const users = await fetch(apiUrl);
            return users;
        } catch (error) {
            throw Error('Something went wrong with fetching users data!');
        }
    }

    function handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }

        return response;
    }

    function renderUsersHTML(users) {
        return users.map(({ name, email, phone }) => `
            <div class="user">
                <span class="user__name">${name}</span>
                <a class="user__email" href="mailto:${email}">${email}</a>
                <a class="user__phone" href="tel:${phone}">${phone}</a>
            </div>
        `).join('');
    }

    function insertUsers(html) {
        const container = document.querySelector('#users');

        if (!container) {
            throw Error('Container for users is missing!');
        }

        container.insertAdjacentHTML('afterbegin', html);
    }
})();