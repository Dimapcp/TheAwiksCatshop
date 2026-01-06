document.addEventListener('DOMContentLoaded', () => {
    // Button script
    const button = document.createElement('button');
    button.textContent = 'Click Me';
    button.style.margin = '10px';
    document.body.appendChild(button);

    button.addEventListener('click', () => {
        alert('Button was clicked!');
    });

    // Container script
    const container = document.createElement('div');
    container.style.border = '2px solid #333';
    container.style.padding = '20px';
    container.style.margin = '10px';
    container.textContent = 'This is a container';
    document.body.appendChild(container);

    // Wrapper script
    const wrapper = document.createElement('div');
    wrapper.style.background = '#f0f0f0';
    wrapper.style.padding = '30px';
    wrapper.style.margin = '10px';
    wrapper.textContent = 'This is a wrapper';
    document.body.appendChild(wrapper);

    // Example: Add button to container
    container.appendChild(button.cloneNode(true));
});
