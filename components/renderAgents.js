export const renderAgents = (agent) => {
  agentsGrid.innerHTML += `
    <div class="agent-card">
        <img src="./assets/agents/agent-${agent.id}.png" alt="${agent.name}" />
        <p class="agent-charge">${agent.job}</p>
        <p class="agent-name">${agent.name}</p>
        <p class="agent-tel">${agent.phone}</p>
        <p class="agent-mail">${agent.email}</p>
        <div class="agent-media-links">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
    `;
};
