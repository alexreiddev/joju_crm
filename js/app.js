/* ==========================================
   GREEN GROWTH CRM - Main Application
   ========================================== */

// ==========================================
// Sample Data Store
// ==========================================
const AppData = {
    deals: [
        { id: 1, owner: 'Julia Hudda', name: 'Dealer', account: 'Green Corp', amount: 15000, date: '2026-03-19', stage: 'New', source: 'Cold Call', contact: '+971 50 123 4567' },
        { id: 2, owner: 'Julia Hudda', name: 'Dealer', account: 'Eco Solutions', amount: 28000, date: '2026-04-01', stage: 'Qualification', source: 'Email', contact: '+971 55 234 5678' },
        { id: 3, owner: 'Julia Hudda', name: 'Dealer', account: 'Solar Plus', amount: 45000, date: '2026-03-25', stage: 'Proposal', source: 'Website', contact: '+971 52 345 6789' },
        { id: 4, owner: 'Julia Hudda', name: 'Dealer', account: 'Wind Energy LLC', amount: 62000, date: '2026-04-10', stage: 'Won', source: 'Referral', contact: '+971 56 456 7890' },
        { id: 5, owner: 'Julia Hudda', name: 'Dealer', account: 'Bio Farms', amount: 8500, date: '2026-03-15', stage: 'Lost', source: 'Social Media', contact: '+971 50 567 8901' },
        { id: 6, owner: 'Julia Hudda', name: 'Dealer', account: 'Clean Water Co', amount: 33000, date: '2026-04-05', stage: 'New', source: 'Cold Call', contact: '+971 55 678 9012' },
        { id: 7, owner: 'Julia Hudda', name: 'Dealer', account: 'Recycle Tech', amount: 19000, date: '2026-03-28', stage: 'Negotiation', source: 'Advertisement', contact: '+971 52 789 0123' },
        { id: 8, owner: 'Julia Hudda', name: 'Dealer', account: 'Green Build', amount: 71000, date: '2026-04-15', stage: 'Won', source: 'Referral', contact: '+971 56 890 1234' },
        { id: 9, owner: 'Julia Hudda', name: 'Dealer', account: 'Eco Transport', amount: 12000, date: '2026-03-22', stage: 'New', source: 'Website', contact: '+971 50 901 2345' },
        { id: 10, owner: 'Julia Hudda', name: 'Dealer', account: 'Nature Foods', amount: 25000, date: '2026-04-08', stage: 'Qualification', source: 'Email', contact: '+971 55 012 3456' },
    ],
    leads: [
        { id: 1, name: 'Ahmad Al Rashid', company: 'Desert Solar LLC', email: 'ahmad@desertsolar.ae', phone: '+971 50 111 2222', source: 'Website', status: 'New', created: '2026-03-10' },
        { id: 2, name: 'Fatima Hassan', company: 'Green Oasis', email: 'fatima@greenoasis.ae', phone: '+971 55 333 4444', source: 'Referral', status: 'Qualified', created: '2026-03-08' },
        { id: 3, name: 'Omar Khalil', company: 'Eco Build Dubai', email: 'omar@ecobuild.ae', phone: '+971 52 555 6666', source: 'Cold Call', status: 'New', created: '2026-03-12' },
        { id: 4, name: 'Sara Mohammed', company: 'Pure Water Systems', email: 'sara@purewater.ae', phone: '+971 56 777 8888', source: 'Email', status: 'Proposal', created: '2026-03-05' },
        { id: 5, name: 'Khalid Ibrahim', company: 'Wind Power ME', email: 'khalid@windpowerme.ae', phone: '+971 50 999 0000', source: 'Social Media', status: 'Won', created: '2026-02-28' },
        { id: 6, name: 'Layla Nasser', company: 'Organic Farms AE', email: 'layla@organicfarms.ae', phone: '+971 55 121 3434', source: 'Advertisement', status: 'Lost', created: '2026-03-01' },
        { id: 7, name: 'Rashid Al Maktoum', company: 'Smart City Tech', email: 'rashid@smartcity.ae', phone: '+971 52 565 7878', source: 'Website', status: 'Qualified', created: '2026-03-11' },
        { id: 8, name: 'Noura Bin Zayed', company: 'Clean Energy Hub', email: 'noura@cleanhub.ae', phone: '+971 56 909 1212', source: 'Referral', status: 'New', created: '2026-03-13' },
    ],
    contacts: [
        { id: 1, name: 'Ahmad Al Rashid', email: 'ahmad@desertsolar.ae', phone: '+971 50 111 2222', company: 'Desert Solar LLC', position: 'CEO', status: 'Active' },
        { id: 2, name: 'Fatima Hassan', email: 'fatima@greenoasis.ae', phone: '+971 55 333 4444', company: 'Green Oasis', position: 'Director', status: 'Active' },
        { id: 3, name: 'Omar Khalil', email: 'omar@ecobuild.ae', phone: '+971 52 555 6666', company: 'Eco Build Dubai', position: 'Manager', status: 'Active' },
        { id: 4, name: 'Sara Mohammed', email: 'sara@purewater.ae', phone: '+971 56 777 8888', company: 'Pure Water Systems', position: 'VP Sales', status: 'Inactive' },
        { id: 5, name: 'Khalid Ibrahim', email: 'khalid@windpowerme.ae', phone: '+971 50 999 0000', company: 'Wind Power ME', position: 'CTO', status: 'Active' },
        { id: 6, name: 'Layla Nasser', email: 'layla@organicfarms.ae', phone: '+971 55 121 3434', company: 'Organic Farms AE', position: 'Owner', status: 'Active' },
    ],
    accounts: [
        { id: 1, name: 'Desert Solar LLC', industry: 'Solar Energy', phone: '+971 4 111 2222', website: 'desertsolar.ae', owner: 'Julia Hudda', status: 'Active', revenue: 1200000 },
        { id: 2, name: 'Green Oasis', industry: 'Agriculture', phone: '+971 4 333 4444', website: 'greenoasis.ae', owner: 'Julia Hudda', status: 'Active', revenue: 850000 },
        { id: 3, name: 'Eco Build Dubai', industry: 'Construction', phone: '+971 4 555 6666', website: 'ecobuild.ae', owner: 'Julia Hudda', status: 'Active', revenue: 3200000 },
        { id: 4, name: 'Pure Water Systems', industry: 'Water Treatment', phone: '+971 4 777 8888', website: 'purewater.ae', owner: 'Julia Hudda', status: 'Inactive', revenue: 640000 },
        { id: 5, name: 'Wind Power ME', industry: 'Wind Energy', phone: '+971 4 999 0000', website: 'windpowerme.ae', owner: 'Julia Hudda', status: 'Active', revenue: 5100000 },
    ],
    tasks: [
        { id: 1, subject: 'Follow up with Ahmad', dueDate: '2026-03-15', priority: 'High', status: 'Pending', assignedTo: 'Julia Hudda' },
        { id: 2, subject: 'Send proposal to Green Oasis', dueDate: '2026-03-16', priority: 'Medium', status: 'Completed', assignedTo: 'Julia Hudda' },
        { id: 3, subject: 'Review contract terms', dueDate: '2026-03-18', priority: 'High', status: 'Pending', assignedTo: 'Julia Hudda' },
        { id: 4, subject: 'Schedule site visit', dueDate: '2026-03-20', priority: 'Low', status: 'Pending', assignedTo: 'Julia Hudda' },
        { id: 5, subject: 'Update CRM records', dueDate: '2026-03-14', priority: 'Medium', status: 'Completed', assignedTo: 'Julia Hudda' },
    ],
    meetings: [
        { id: 1, title: 'Q1 Sales Review', date: '2026-03-15 10:00', location: 'Conference Room A', attendees: 'Julia, Ahmad, Sara', status: 'Scheduled' },
        { id: 2, title: 'Product Demo - Eco Build', date: '2026-03-16 14:00', location: 'Client Office', attendees: 'Julia, Omar', status: 'Scheduled' },
        { id: 3, title: 'Partnership Discussion', date: '2026-03-18 11:00', location: 'Virtual - Zoom', attendees: 'Julia, Khalid, Fatima', status: 'Completed' },
        { id: 4, title: 'Budget Planning', date: '2026-03-20 09:00', location: 'Board Room', attendees: 'Julia, Management', status: 'Scheduled' },
    ],
    calls: [
        { id: 1, contact: 'Ahmad Al Rashid', date: '2026-03-14 09:30', duration: '15 min', type: 'Outbound', notes: 'Discussed pricing options', status: 'Completed' },
        { id: 2, contact: 'Fatima Hassan', date: '2026-03-14 11:00', duration: '25 min', type: 'Inbound', notes: 'Follow-up on proposal', status: 'Completed' },
        { id: 3, contact: 'Omar Khalil', date: '2026-03-15 10:00', duration: '—', type: 'Outbound', notes: 'Schedule product demo', status: 'Scheduled' },
        { id: 4, contact: 'Sara Mohammed', date: '2026-03-15 14:30', duration: '—', type: 'Outbound', notes: 'Contract negotiation', status: 'Scheduled' },
    ],
    pendingOrders: [
        { id: 'ORD-001', customer: 'Desert Solar LLC', items: 'Solar Panels x50', amount: 125000, date: '2026-03-10', status: 'Pending' },
        { id: 'ORD-002', customer: 'Green Oasis', items: 'Irrigation Systems x10', amount: 45000, date: '2026-03-11', status: 'Processing' },
        { id: 'ORD-003', customer: 'Eco Build Dubai', items: 'Green Insulation x200', amount: 68000, date: '2026-03-12', status: 'Pending' },
    ],
    shippedOrders: [
        { id: 'ORD-098', customer: 'Wind Power ME', items: 'Turbine Components x5', amount: 310000, date: '2026-03-05', trackingNo: 'TRK-887766', status: 'Delivered' },
        { id: 'ORD-097', customer: 'Pure Water Systems', items: 'Filters x100', amount: 18000, date: '2026-03-03', trackingNo: 'TRK-776655', status: 'In Transit' },
        { id: 'ORD-096', customer: 'Organic Farms AE', items: 'Seeds & Fertilizer', amount: 5200, date: '2026-03-01', trackingNo: 'TRK-665544', status: 'Delivered' },
    ],
    invoices: [
        { id: 'INV-001', client: 'Desert Solar LLC', amount: 125000, date: '2026-03-10', dueDate: '2026-04-10', status: 'Pending' },
        { id: 'INV-002', client: 'Wind Power ME', amount: 310000, date: '2026-03-05', dueDate: '2026-04-05', status: 'Paid' },
        { id: 'INV-003', client: 'Green Oasis', amount: 45000, date: '2026-03-11', dueDate: '2026-04-11', status: 'Pending' },
        { id: 'INV-004', client: 'Eco Build Dubai', amount: 68000, date: '2026-02-15', dueDate: '2026-03-15', status: 'Overdue' },
    ],
};

// ==========================================
// App State
// ==========================================
let currentPage = 'deals';

// ==========================================
// DOM Elements
// ==========================================
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const menuToggle = document.getElementById('menuToggle');
const mainContent = document.getElementById('mainContent');
const searchToggle = document.getElementById('searchToggle');
const searchOverlay = document.getElementById('searchOverlay');
const searchClose = document.getElementById('searchClose');
const dealModal = document.getElementById('dealModal');
const closeDealModal = document.getElementById('closeDealModal');
const cancelDeal = document.getElementById('cancelDeal');
const submitDeal = document.getElementById('submitDeal');
const dealForm = document.getElementById('dealForm');

// ==========================================
// Sidebar Toggle
// ==========================================
menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    sidebarOverlay.classList.toggle('active');
});

sidebarOverlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    sidebarOverlay.classList.remove('active');
});

// ==========================================
// Submenu Toggle
// ==========================================
document.querySelectorAll('.submenu-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const submenuId = toggle.getAttribute('data-submenu');
        const submenu = document.getElementById(`submenu-${submenuId}`);
        const isOpen = submenu.classList.contains('open');

        // Close all submenus
        document.querySelectorAll('.submenu').forEach(s => s.classList.remove('open'));
        document.querySelectorAll('.submenu-toggle').forEach(t => t.classList.remove('expanded'));

        // Toggle this submenu
        if (!isOpen) {
            submenu.classList.add('open');
            toggle.classList.add('expanded');
        }
    });
});

// ==========================================
// Page Navigation
// ==========================================
document.querySelectorAll('.menu-link[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.getAttribute('data-page');
        navigateTo(page);

        // Close sidebar on mobile
        sidebar.classList.remove('open');
        sidebarOverlay.classList.remove('active');
    });
});

function navigateTo(page) {
    currentPage = page;

    // Update active state
    document.querySelectorAll('.menu-link').forEach(l => l.classList.remove('active'));
    const activeLink = document.querySelector(`.menu-link[data-page="${page}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
        // Open parent submenu if exists
        const parentSubmenu = activeLink.closest('.submenu');
        if (parentSubmenu) {
            parentSubmenu.classList.add('open');
            const parentToggle = parentSubmenu.previousElementSibling;
            if (parentToggle) parentToggle.classList.add('expanded');
        }
    }

    renderPage(page);
}

// ==========================================
// Search
// ==========================================
searchToggle.addEventListener('click', () => {
    searchOverlay.classList.add('active');
    document.getElementById('globalSearch').focus();
});

searchClose.addEventListener('click', () => {
    searchOverlay.classList.remove('active');
});

searchOverlay.addEventListener('click', (e) => {
    if (e.target === searchOverlay) {
        searchOverlay.classList.remove('active');
    }
});

// ==========================================
// Deal Modal
// ==========================================
function openDealModal() {
    dealModal.classList.add('active');
}

function closeDealModalFn() {
    dealModal.classList.remove('active');
    dealForm.reset();
}

closeDealModal.addEventListener('click', closeDealModalFn);
cancelDeal.addEventListener('click', closeDealModalFn);

dealModal.addEventListener('click', (e) => {
    if (e.target === dealModal) closeDealModalFn();
});

submitDeal.addEventListener('click', () => {
    const formData = new FormData(dealForm);
    const deal = {
        id: AppData.deals.length + 1,
        owner: formData.get('dealOwner') || 'Julia Hudda',
        name: formData.get('dealName'),
        account: formData.get('accountName'),
        amount: parseFloat(formData.get('amount')) || 0,
        date: formData.get('closingDate'),
        stage: formData.get('stage'),
        source: formData.get('leadSource'),
        contact: formData.get('contactName'),
    };

    if (!deal.name) {
        showToast('Please enter a deal name', 'error');
        return;
    }

    AppData.deals.push(deal);
    closeDealModalFn();
    showToast('Deal created successfully!', 'success');
    if (currentPage === 'deals') renderPage('deals');
});

// ==========================================
// Toast Notifications
// ==========================================
function showToast(message, type = 'success') {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const icon = type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle';
    toast.innerHTML = `<i class="fa-solid ${icon}"></i> ${message}`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ==========================================
// Page Renderer
// ==========================================
function renderPage(page) {
    const pages = {
        dashboard: renderDashboard,
        deals: renderDeals,
        leads: renderLeads,
        contacts: renderContacts,
        accounts: renderAccounts,
        forecast: renderForecast,
        campaign: renderCampaign,
        tasks: renderTasks,
        meetings: renderMeetings,
        calls: renderCalls,
        attendance: renderAttendance,
        'pending-orders': renderPendingOrders,
        'shipped-orders': renderShippedOrders,
        invoices: renderInvoices,
        payments: renderPayments,
        expenses: renderExpenses,
        profile: renderProfile,
        company: renderCompany,
        users: renderUsers,
    };

    const renderer = pages[page] || renderComingSoon;
    mainContent.innerHTML = renderer();
    bindPageEvents(page);
}

// ==========================================
// Bind Page Events after render
// ==========================================
function bindPageEvents(page) {
    // Create Deal button
    const createDealBtn = document.getElementById('createDealBtn');
    if (createDealBtn) createDealBtn.addEventListener('click', openDealModal);

    // Table search
    const tableSearchInput = document.getElementById('tableSearch');
    if (tableSearchInput) {
        tableSearchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const rows = document.querySelectorAll('.data-table tbody tr');
            rows.forEach(row => {
                const text = row.textContent.toLowerCase();
                row.style.display = text.includes(searchTerm) ? '' : 'none';
            });
        });
    }

    // Position filter
    const positionFilter = document.getElementById('positionFilter');
    if (positionFilter) {
        positionFilter.addEventListener('change', (e) => {
            const value = e.target.value.toLowerCase();
            const rows = document.querySelectorAll('.data-table tbody tr');
            rows.forEach(row => {
                if (!value || value === 'all') {
                    row.style.display = '';
                } else {
                    const text = row.textContent.toLowerCase();
                    row.style.display = text.includes(value) ? '' : 'none';
                }
            });
        });
    }

    // Delete buttons
    document.querySelectorAll('.action-btn.delete').forEach(btn => {
        btn.addEventListener('click', () => {
            if (confirm('Are you sure you want to delete this item?')) {
                showToast('Item deleted successfully', 'success');
                renderPage(currentPage);
            }
        });
    });
}

// ==========================================
// DASHBOARD PAGE
// ==========================================
function renderDashboard() {
    const totalDeals = AppData.deals.length;
    const wonDeals = AppData.deals.filter(d => d.stage === 'Won').length;
    const totalRevenue = AppData.deals.filter(d => d.stage === 'Won').reduce((s, d) => s + d.amount, 0);
    const pendingTasks = AppData.tasks.filter(t => t.status === 'Pending').length;

    return `
        <div class="page-header">
            <h1 class="page-title">Dashboard</h1>
        </div>
        <div class="stat-cards">
            <div class="stat-card green">
                <div class="stat-info">
                    <h4>Total Deals</h4>
                    <div class="stat-number">${totalDeals}</div>
                </div>
                <div class="stat-icon"><i class="fa-solid fa-handshake"></i></div>
            </div>
            <div class="stat-card purple">
                <div class="stat-info">
                    <h4>Won Deals</h4>
                    <div class="stat-number">${wonDeals}</div>
                </div>
                <div class="stat-icon"><i class="fa-solid fa-trophy"></i></div>
            </div>
            <div class="stat-card pink">
                <div class="stat-info">
                    <h4>Total Revenue</h4>
                    <div class="stat-number">AED ${totalRevenue.toLocaleString()}</div>
                </div>
                <div class="stat-icon"><i class="fa-solid fa-coins"></i></div>
            </div>
            <div class="stat-card orange">
                <div class="stat-info">
                    <h4>Pending Tasks</h4>
                    <div class="stat-number">${pendingTasks}</div>
                </div>
                <div class="stat-icon"><i class="fa-solid fa-clock"></i></div>
            </div>
        </div>
        <div class="dashboard-grid">
            <div class="dashboard-card">
                <h3>Sales Overview</h3>
                <div class="mini-stat-grid">
                    <div class="mini-stat">
                        <div class="value">${AppData.leads.length}</div>
                        <div class="label">Total Leads</div>
                    </div>
                    <div class="mini-stat">
                        <div class="value">${AppData.contacts.length}</div>
                        <div class="label">Contacts</div>
                    </div>
                    <div class="mini-stat">
                        <div class="value">${AppData.accounts.length}</div>
                        <div class="label">Accounts</div>
                    </div>
                    <div class="mini-stat">
                        <div class="value">${AppData.meetings.filter(m => m.status === 'Scheduled').length}</div>
                        <div class="label">Meetings</div>
                    </div>
                </div>
            </div>
            <div class="dashboard-card">
                <h3>Revenue Chart</h3>
                <div class="chart-placeholder">
                    <div style="text-align:center">
                        <i class="fa-solid fa-chart-line" style="font-size:40px;color:var(--green-primary);display:block;margin-bottom:8px"></i>
                        Revenue Trend
                    </div>
                </div>
            </div>
            <div class="dashboard-card">
                <h3>Recent Activities</h3>
                <ul class="activity-list">
                    <li class="activity-item">
                        <span class="activity-dot green"></span>
                        <div>
                            <div class="activity-text">New deal created - Wind Power ME</div>
                            <div class="activity-time">2 hours ago</div>
                        </div>
                    </li>
                    <li class="activity-item">
                        <span class="activity-dot blue"></span>
                        <div>
                            <div class="activity-text">Meeting scheduled with Eco Build</div>
                            <div class="activity-time">4 hours ago</div>
                        </div>
                    </li>
                    <li class="activity-item">
                        <span class="activity-dot orange"></span>
                        <div>
                            <div class="activity-text">Proposal sent to Green Oasis</div>
                            <div class="activity-time">Yesterday</div>
                        </div>
                    </li>
                    <li class="activity-item">
                        <span class="activity-dot red"></span>
                        <div>
                            <div class="activity-text">Deal lost - Bio Farms</div>
                            <div class="activity-time">2 days ago</div>
                        </div>
                    </li>
                    <li class="activity-item">
                        <span class="activity-dot green"></span>
                        <div>
                            <div class="activity-text">Invoice paid by Wind Power ME</div>
                            <div class="activity-time">3 days ago</div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="dashboard-card">
                <h3>Upcoming Tasks</h3>
                <ul class="activity-list">
                    ${AppData.tasks.filter(t => t.status === 'Pending').map(t => `
                        <li class="activity-item">
                            <span class="activity-dot ${t.priority === 'High' ? 'red' : t.priority === 'Medium' ? 'orange' : 'blue'}"></span>
                            <div>
                                <div class="activity-text">${t.subject}</div>
                                <div class="activity-time">Due: ${t.dueDate}</div>
                            </div>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
}

// ==========================================
// DEALS PAGE
// ==========================================
function renderDeals() {
    const newLeads = AppData.deals.filter(d => d.stage === 'New').length;
    const quoteSent = AppData.deals.filter(d => ['Qualification', 'Proposal', 'Negotiation'].includes(d.stage)).length;
    const wonLeads = AppData.deals.filter(d => d.stage === 'Won').length;
    const lostLeads = AppData.deals.filter(d => d.stage === 'Lost').length;

    return `
        <div class="page-header">
            <h1 class="page-title">DEALS</h1>
            <button class="btn btn-primary" id="createDealBtn">Create Deals</button>
        </div>
        <div class="stat-cards">
            <div class="stat-card green">
                <div class="stat-info">
                    <h4>New leads</h4>
                    <div class="stat-number">${newLeads}</div>
                </div>
                <div class="stat-icon"><i class="fa-solid fa-cart-shopping"></i></div>
            </div>
            <div class="stat-card purple">
                <div class="stat-info">
                    <h4>Quote Send</h4>
                    <div class="stat-number">${quoteSent}</div>
                </div>
                <div class="stat-icon"><i class="fa-solid fa-dollar-sign"></i></div>
            </div>
            <div class="stat-card pink">
                <div class="stat-info">
                    <h4>Won Leads</h4>
                    <div class="stat-number">${wonLeads}</div>
                </div>
                <div class="stat-icon"><i class="fa-solid fa-user-group"></i></div>
            </div>
            <div class="stat-card orange">
                <div class="stat-info">
                    <h4>Lost leads</h4>
                    <div class="stat-number">${lostLeads}</div>
                </div>
                <div class="stat-icon"><i class="fa-brands fa-bitcoin"></i></div>
            </div>
        </div>
        <div class="table-toolbar">
            <div class="toolbar-actions">
                <button class="btn btn-sm btn-outline" onclick="exportTable('copy')">Copy</button>
                <button class="btn btn-sm btn-outline" onclick="exportTable('excel')">Excel</button>
                <button class="btn btn-sm btn-outline" onclick="exportTable('pdf')">PDF</button>
                <button class="btn btn-sm btn-outline" onclick="toggleColumns()">Column visibility</button>
            </div>
        </div>
        <div class="table-toolbar">
            <div class="toolbar-filter">
                <select class="filter-select" id="positionFilter">
                    <option value="all">All Positions</option>
                    <option value="new">New</option>
                    <option value="qualification">Qualification</option>
                    <option value="proposal">Proposal</option>
                    <option value="won">Won</option>
                    <option value="lost">Lost</option>
                </select>
            </div>
            <div class="table-search">
                <label>Search:</label>
                <input type="text" id="tableSearch" placeholder="">
            </div>
        </div>
        <div class="data-table-wrapper">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Deal Owner <span class="sort-icon"><i class="fa-solid fa-sort"></i></span></th>
                        <th>Deal Name <span class="sort-icon"><i class="fa-solid fa-sort"></i></span></th>
                        <th>Amount <span class="sort-icon"><i class="fa-solid fa-sort"></i></span></th>
                        <th>Stage <span class="sort-icon"><i class="fa-solid fa-sort"></i></span></th>
                        <th>Closing Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${AppData.deals.map(deal => `
                        <tr>
                            <td><button class="expand-btn"><i class="fa-solid fa-plus"></i></button> ${deal.owner}</td>
                            <td>${deal.name}</td>
                            <td>AED ${deal.amount.toLocaleString()}</td>
                            <td><span class="status-badge ${deal.stage.toLowerCase()}">${deal.stage}</span></td>
                            <td>${deal.date}</td>
                            <td>
                                <div class="action-btns">
                                    <button class="action-btn view" title="View"><i class="fa-solid fa-eye"></i></button>
                                    <button class="action-btn edit" title="Edit"><i class="fa-solid fa-pen"></i></button>
                                    <button class="action-btn delete" title="Delete"><i class="fa-solid fa-trash"></i></button>
                                </div>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
        <div class="table-pagination">
            <span class="page-info">Showing 1 to ${AppData.deals.length} of ${AppData.deals.length} entries</span>
            <div class="page-nav">
                <button class="page-btn"><i class="fa-solid fa-chevron-left"></i></button>
                <button class="page-btn"><i class="fa-solid fa-chevron-right"></i></button>
            </div>
        </div>
    `;
}

// ==========================================
// LEADS PAGE
// ==========================================
function renderLeads() {
    return `
        <div class="page-header">
            <h1 class="page-title">LEADS</h1>
            <button class="btn btn-primary" onclick="showToast('Create Lead form coming soon', 'warning')">Create Lead</button>
        </div>
        <div class="stat-cards">
            <div class="stat-card green">
                <div class="stat-info">
                    <h4>Total Leads</h4>
                    <div class="stat-number">${AppData.leads.length}</div>
                </div>
                <div class="stat-icon"><i class="fa-solid fa-users"></i></div>
            </div>
            <div class="stat-card purple">
                <div class="stat-info">
                    <h4>Qualified</h4>
                    <div class="stat-number">${AppData.leads.filter(l => l.status === 'Qualified').length}</div>
                </div>
                <div class="stat-icon"><i class="fa-solid fa-user-check"></i></div>
            </div>
            <div class="stat-card pink">
                <div class="stat-info">
                    <h4>Won</h4>
                    <div class="stat-number">${AppData.leads.filter(l => l.status === 'Won').length}</div>
                </div>
                <div class="stat-icon"><i class="fa-solid fa-trophy"></i></div>
            </div>
            <div class="stat-card orange">
                <div class="stat-info">
                    <h4>Lost</h4>
                    <div class="stat-number">${AppData.leads.filter(l => l.status === 'Lost').length}</div>
                </div>
                <div class="stat-icon"><i class="fa-solid fa-user-xmark"></i></div>
            </div>
        </div>
        <div class="table-toolbar">
            <div class="toolbar-actions">
                <button class="btn btn-sm btn-outline" onclick="exportTable('copy')">Copy</button>
                <button class="btn btn-sm btn-outline" onclick="exportTable('excel')">Excel</button>
                <button class="btn btn-sm btn-outline" onclick="exportTable('pdf')">PDF</button>
            </div>
            <div class="table-search" style="margin-left:auto">
                <label>Search:</label>
                <input type="text" id="tableSearch">
            </div>
        </div>
        <div class="data-table-wrapper">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Company</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Source</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${AppData.leads.map(lead => `
                        <tr>
                            <td>${lead.name}</td>
                            <td>${lead.company}</td>
                            <td>${lead.email}</td>
                            <td>${lead.phone}</td>
                            <td>${lead.source}</td>
                            <td><span class="status-badge ${lead.status.toLowerCase()}">${lead.status}</span></td>
                            <td>
                                <div class="action-btns">
                                    <button class="action-btn view"><i class="fa-solid fa-eye"></i></button>
                                    <button class="action-btn edit"><i class="fa-solid fa-pen"></i></button>
                                    <button class="action-btn delete"><i class="fa-solid fa-trash"></i></button>
                                </div>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
        <div class="table-pagination">
            <span class="page-info">Showing 1 to ${AppData.leads.length} of ${AppData.leads.length} entries</span>
            <div class="page-nav">
                <button class="page-btn"><i class="fa-solid fa-chevron-left"></i></button>
                <button class="page-btn"><i class="fa-solid fa-chevron-right"></i></button>
            </div>
        </div>
    `;
}

// ==========================================
// CONTACTS PAGE
// ==========================================
function renderContacts() {
    return `
        <div class="page-header">
            <h1 class="page-title">CONTACTS</h1>
            <button class="btn btn-primary" onclick="showToast('Create Contact form coming soon', 'warning')">Create Contact</button>
        </div>
        <div class="table-toolbar">
            <div class="toolbar-actions">
                <button class="btn btn-sm btn-outline" onclick="exportTable('copy')">Copy</button>
                <button class="btn btn-sm btn-outline" onclick="exportTable('excel')">Excel</button>
                <button class="btn btn-sm btn-outline" onclick="exportTable('pdf')">PDF</button>
            </div>
            <div class="table-search" style="margin-left:auto">
                <label>Search:</label>
                <input type="text" id="tableSearch">
            </div>
        </div>
        <div class="data-table-wrapper">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Company</th>
                        <th>Position</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${AppData.contacts.map(c => `
                        <tr>
                            <td>${c.name}</td>
                            <td>${c.email}</td>
                            <td>${c.phone}</td>
                            <td>${c.company}</td>
                            <td>${c.position}</td>
                            <td><span class="status-badge ${c.status.toLowerCase()}">${c.status}</span></td>
                            <td>
                                <div class="action-btns">
                                    <button class="action-btn view"><i class="fa-solid fa-eye"></i></button>
                                    <button class="action-btn edit"><i class="fa-solid fa-pen"></i></button>
                                    <button class="action-btn delete"><i class="fa-solid fa-trash"></i></button>
                                </div>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
        <div class="table-pagination">
            <span class="page-info">Showing 1 to ${AppData.contacts.length} of ${AppData.contacts.length} entries</span>
        </div>
    `;
}

// ==========================================
// ACCOUNTS PAGE
// ==========================================
function renderAccounts() {
    return `
        <div class="page-header">
            <h1 class="page-title">ACCOUNTS</h1>
            <button class="btn btn-primary" onclick="showToast('Create Account form coming soon', 'warning')">Create Account</button>
        </div>
        <div class="table-toolbar">
            <div class="toolbar-actions">
                <button class="btn btn-sm btn-outline" onclick="exportTable('copy')">Copy</button>
                <button class="btn btn-sm btn-outline" onclick="exportTable('excel')">Excel</button>
                <button class="btn btn-sm btn-outline" onclick="exportTable('pdf')">PDF</button>
            </div>
            <div class="table-search" style="margin-left:auto">
                <label>Search:</label>
                <input type="text" id="tableSearch">
            </div>
        </div>
        <div class="data-table-wrapper">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Account Name</th>
                        <th>Industry</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Owner</th>
                        <th>Revenue</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${AppData.accounts.map(a => `
                        <tr>
                            <td>${a.name}</td>
                            <td>${a.industry}</td>
                            <td>${a.phone}</td>
                            <td>${a.website}</td>
                            <td>${a.owner}</td>
                            <td>AED ${a.revenue.toLocaleString()}</td>
                            <td><span class="status-badge ${a.status.toLowerCase()}">${a.status}</span></td>
                            <td>
                                <div class="action-btns">
                                    <button class="action-btn view"><i class="fa-solid fa-eye"></i></button>
                                    <button class="action-btn edit"><i class="fa-solid fa-pen"></i></button>
                                    <button class="action-btn delete"><i class="fa-solid fa-trash"></i></button>
                                </div>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

// ==========================================
// FORECAST PAGE
// ==========================================
function renderForecast() {
    const totalPipeline = AppData.deals.reduce((s, d) => s + d.amount, 0);
    const wonAmount = AppData.deals.filter(d => d.stage === 'Won').reduce((s, d) => s + d.amount, 0);
    const openAmount = AppData.deals.filter(d => !['Won', 'Lost'].includes(d.stage)).reduce((s, d) => s + d.amount, 0);

    return `
        <div class="page-header">
            <h1 class="page-title">FORECAST</h1>
        </div>
        <div class="stat-cards">
            <div class="stat-card green">
                <div class="stat-info">
                    <h4>Total Pipeline</h4>
                    <div class="stat-number">AED ${totalPipeline.toLocaleString()}</div>
                </div>
                <div class="stat-icon"><i class="fa-solid fa-chart-pie"></i></div>
            </div>
            <div class="stat-card purple">
                <div class="stat-info">
                    <h4>Won Revenue</h4>
                    <div class="stat-number">AED ${wonAmount.toLocaleString()}</div>
                </div>
                <div class="stat-icon"><i class="fa-solid fa-sack-dollar"></i></div>
            </div>
            <div class="stat-card orange">
                <div class="stat-info">
                    <h4>Open Pipeline</h4>
                    <div class="stat-number">AED ${openAmount.toLocaleString()}</div>
                </div>
                <div class="stat-icon"><i class="fa-solid fa-hourglass-half"></i></div>
            </div>
        </div>
        <div class="dashboard-card">
            <h3>Sales Forecast by Stage</h3>
            <div class="chart-placeholder" style="height:300px">
                <div style="text-align:center">
                    <i class="fa-solid fa-chart-bar" style="font-size:48px;color:var(--green-primary);display:block;margin-bottom:8px"></i>
                    Forecast Visualization
                </div>
            </div>
        </div>
    `;
}

// ==========================================
// CAMPAIGN PAGE
// ==========================================
function renderCampaign() {
    return `
        <div class="page-header">
            <h1 class="page-title">CAMPAIGNS</h1>
            <button class="btn btn-primary" onclick="showToast('Create Campaign form coming soon', 'warning')">Create Campaign</button>
        </div>
        <div class="stat-cards">
            <div class="stat-card green">
                <div class="stat-info"><h4>Active Campaigns</h4><div class="stat-number">3</div></div>
                <div class="stat-icon"><i class="fa-solid fa-bullhorn"></i></div>
            </div>
            <div class="stat-card purple">
                <div class="stat-info"><h4>Total Reach</h4><div class="stat-number">12,450</div></div>
                <div class="stat-icon"><i class="fa-solid fa-users"></i></div>
            </div>
            <div class="stat-card pink">
                <div class="stat-info"><h4>Conversions</h4><div class="stat-number">342</div></div>
                <div class="stat-icon"><i class="fa-solid fa-arrow-trend-up"></i></div>
            </div>
        </div>
        <div class="data-table-wrapper">
            <table class="data-table">
                <thead>
                    <tr><th>Campaign Name</th><th>Type</th><th>Status</th><th>Start Date</th><th>Budget</th><th>Leads</th></tr>
                </thead>
                <tbody>
                    <tr><td>Q1 Email Blast</td><td>Email</td><td><span class="status-badge active">Active</span></td><td>2026-01-15</td><td>AED 5,000</td><td>120</td></tr>
                    <tr><td>Social Media Push</td><td>Social</td><td><span class="status-badge active">Active</span></td><td>2026-02-01</td><td>AED 8,000</td><td>185</td></tr>
                    <tr><td>Trade Show - WETEX</td><td>Event</td><td><span class="status-badge pending">Planned</span></td><td>2026-04-10</td><td>AED 25,000</td><td>0</td></tr>
                    <tr><td>Google Ads Campaign</td><td>PPC</td><td><span class="status-badge active">Active</span></td><td>2026-03-01</td><td>AED 12,000</td><td>37</td></tr>
                </tbody>
            </table>
        </div>
    `;
}

// ==========================================
// TASKS PAGE
// ==========================================
function renderTasks() {
    return `
        <div class="page-header">
            <h1 class="page-title">TASKS</h1>
            <button class="btn btn-primary" onclick="showToast('Create Task form coming soon', 'warning')">Create Task</button>
        </div>
        <div class="table-toolbar">
            <div class="table-search" style="margin-left:auto">
                <label>Search:</label>
                <input type="text" id="tableSearch">
            </div>
        </div>
        <div class="data-table-wrapper">
            <table class="data-table">
                <thead>
                    <tr><th>Subject</th><th>Due Date</th><th>Priority</th><th>Status</th><th>Assigned To</th><th>Actions</th></tr>
                </thead>
                <tbody>
                    ${AppData.tasks.map(t => `
                        <tr>
                            <td>${t.subject}</td>
                            <td>${t.dueDate}</td>
                            <td><span class="status-badge ${t.priority === 'High' ? 'lost' : t.priority === 'Medium' ? 'pending' : 'active'}">${t.priority}</span></td>
                            <td><span class="status-badge ${t.status.toLowerCase()}">${t.status}</span></td>
                            <td>${t.assignedTo}</td>
                            <td>
                                <div class="action-btns">
                                    <button class="action-btn view"><i class="fa-solid fa-eye"></i></button>
                                    <button class="action-btn edit"><i class="fa-solid fa-pen"></i></button>
                                    <button class="action-btn delete"><i class="fa-solid fa-trash"></i></button>
                                </div>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

// ==========================================
// MEETINGS PAGE
// ==========================================
function renderMeetings() {
    return `
        <div class="page-header">
            <h1 class="page-title">MEETINGS</h1>
            <button class="btn btn-primary" onclick="showToast('Schedule Meeting form coming soon', 'warning')">Schedule Meeting</button>
        </div>
        <div class="data-table-wrapper">
            <table class="data-table">
                <thead>
                    <tr><th>Title</th><th>Date & Time</th><th>Location</th><th>Attendees</th><th>Status</th><th>Actions</th></tr>
                </thead>
                <tbody>
                    ${AppData.meetings.map(m => `
                        <tr>
                            <td>${m.title}</td>
                            <td>${m.date}</td>
                            <td>${m.location}</td>
                            <td>${m.attendees}</td>
                            <td><span class="status-badge ${m.status === 'Scheduled' ? 'pending' : 'completed'}">${m.status}</span></td>
                            <td>
                                <div class="action-btns">
                                    <button class="action-btn view"><i class="fa-solid fa-eye"></i></button>
                                    <button class="action-btn edit"><i class="fa-solid fa-pen"></i></button>
                                    <button class="action-btn delete"><i class="fa-solid fa-trash"></i></button>
                                </div>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

// ==========================================
// CALLS PAGE
// ==========================================
function renderCalls() {
    return `
        <div class="page-header">
            <h1 class="page-title">CALLS</h1>
            <button class="btn btn-primary" onclick="showToast('Log Call form coming soon', 'warning')">Log Call</button>
        </div>
        <div class="data-table-wrapper">
            <table class="data-table">
                <thead>
                    <tr><th>Contact</th><th>Date & Time</th><th>Duration</th><th>Type</th><th>Notes</th><th>Status</th><th>Actions</th></tr>
                </thead>
                <tbody>
                    ${AppData.calls.map(c => `
                        <tr>
                            <td>${c.contact}</td>
                            <td>${c.date}</td>
                            <td>${c.duration}</td>
                            <td>${c.type}</td>
                            <td>${c.notes}</td>
                            <td><span class="status-badge ${c.status.toLowerCase()}">${c.status}</span></td>
                            <td>
                                <div class="action-btns">
                                    <button class="action-btn view"><i class="fa-solid fa-eye"></i></button>
                                    <button class="action-btn delete"><i class="fa-solid fa-trash"></i></button>
                                </div>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

// ==========================================
// ATTENDANCE PAGE
// ==========================================
function renderAttendance() {
    return `
        <div class="page-header">
            <h1 class="page-title">ATTENDANCE</h1>
        </div>
        <div class="attendance-grid">
            <div class="attendance-card">
                <div class="att-value att-present">22</div>
                <div class="att-label">Present</div>
            </div>
            <div class="attendance-card">
                <div class="att-value att-absent">3</div>
                <div class="att-label">Absent</div>
            </div>
            <div class="attendance-card">
                <div class="att-value att-late">2</div>
                <div class="att-label">Late</div>
            </div>
            <div class="attendance-card">
                <div class="att-value att-leave">1</div>
                <div class="att-label">On Leave</div>
            </div>
        </div>
        <div class="data-table-wrapper">
            <table class="data-table">
                <thead>
                    <tr><th>Employee</th><th>Date</th><th>Check In</th><th>Check Out</th><th>Hours</th><th>Status</th></tr>
                </thead>
                <tbody>
                    <tr><td>Julia Hudda</td><td>2026-03-14</td><td>09:00</td><td>18:00</td><td>9h</td><td><span class="status-badge active">Present</span></td></tr>
                    <tr><td>Ahmad Al Rashid</td><td>2026-03-14</td><td>09:15</td><td>18:00</td><td>8h 45m</td><td><span class="status-badge pending">Late</span></td></tr>
                    <tr><td>Fatima Hassan</td><td>2026-03-14</td><td>08:55</td><td>17:30</td><td>8h 35m</td><td><span class="status-badge active">Present</span></td></tr>
                    <tr><td>Omar Khalil</td><td>2026-03-14</td><td>—</td><td>—</td><td>—</td><td><span class="status-badge lost">Absent</span></td></tr>
                    <tr><td>Sara Mohammed</td><td>2026-03-14</td><td>—</td><td>—</td><td>—</td><td><span class="status-badge new">On Leave</span></td></tr>
                </tbody>
            </table>
        </div>
    `;
}

// ==========================================
// PENDING ORDERS PAGE
// ==========================================
function renderPendingOrders() {
    return `
        <div class="page-header">
            <h1 class="page-title">PENDING ORDERS</h1>
        </div>
        <div class="data-table-wrapper">
            <table class="data-table">
                <thead>
                    <tr><th>Order ID</th><th>Customer</th><th>Items</th><th>Amount</th><th>Date</th><th>Status</th><th>Actions</th></tr>
                </thead>
                <tbody>
                    ${AppData.pendingOrders.map(o => `
                        <tr>
                            <td>${o.id}</td>
                            <td>${o.customer}</td>
                            <td>${o.items}</td>
                            <td>AED ${o.amount.toLocaleString()}</td>
                            <td>${o.date}</td>
                            <td><span class="status-badge pending">${o.status}</span></td>
                            <td>
                                <div class="action-btns">
                                    <button class="action-btn view"><i class="fa-solid fa-eye"></i></button>
                                    <button class="action-btn edit"><i class="fa-solid fa-pen"></i></button>
                                </div>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

// ==========================================
// SHIPPED ORDERS PAGE
// ==========================================
function renderShippedOrders() {
    return `
        <div class="page-header">
            <h1 class="page-title">SHIPPED ORDERS</h1>
        </div>
        <div class="data-table-wrapper">
            <table class="data-table">
                <thead>
                    <tr><th>Order ID</th><th>Customer</th><th>Items</th><th>Amount</th><th>Ship Date</th><th>Tracking No.</th><th>Status</th></tr>
                </thead>
                <tbody>
                    ${AppData.shippedOrders.map(o => `
                        <tr>
                            <td>${o.id}</td>
                            <td>${o.customer}</td>
                            <td>${o.items}</td>
                            <td>AED ${o.amount.toLocaleString()}</td>
                            <td>${o.date}</td>
                            <td>${o.trackingNo}</td>
                            <td><span class="status-badge ${o.status === 'Delivered' ? 'completed' : 'shipped'}">${o.status}</span></td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

// ==========================================
// INVOICES PAGE
// ==========================================
function renderInvoices() {
    return `
        <div class="page-header">
            <h1 class="page-title">INVOICES</h1>
            <button class="btn btn-primary" onclick="showToast('Create Invoice form coming soon', 'warning')">Create Invoice</button>
        </div>
        <div class="data-table-wrapper">
            <table class="data-table">
                <thead>
                    <tr><th>Invoice #</th><th>Client</th><th>Amount</th><th>Date</th><th>Due Date</th><th>Status</th><th>Actions</th></tr>
                </thead>
                <tbody>
                    ${AppData.invoices.map(inv => `
                        <tr>
                            <td>${inv.id}</td>
                            <td>${inv.client}</td>
                            <td>AED ${inv.amount.toLocaleString()}</td>
                            <td>${inv.date}</td>
                            <td>${inv.dueDate}</td>
                            <td><span class="status-badge ${inv.status.toLowerCase()}">${inv.status}</span></td>
                            <td>
                                <div class="action-btns">
                                    <button class="action-btn view"><i class="fa-solid fa-eye"></i></button>
                                    <button class="action-btn edit"><i class="fa-solid fa-pen"></i></button>
                                </div>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

// ==========================================
// PAYMENTS PAGE
// ==========================================
function renderPayments() {
    return `
        <div class="page-header">
            <h1 class="page-title">PAYMENTS</h1>
        </div>
        <div class="stat-cards">
            <div class="stat-card green">
                <div class="stat-info"><h4>Total Received</h4><div class="stat-number">AED 310,000</div></div>
                <div class="stat-icon"><i class="fa-solid fa-circle-check"></i></div>
            </div>
            <div class="stat-card orange">
                <div class="stat-info"><h4>Pending</h4><div class="stat-number">AED 238,000</div></div>
                <div class="stat-icon"><i class="fa-solid fa-clock"></i></div>
            </div>
        </div>
        <div class="data-table-wrapper">
            <table class="data-table">
                <thead>
                    <tr><th>Payment ID</th><th>Invoice</th><th>Client</th><th>Amount</th><th>Date</th><th>Method</th><th>Status</th></tr>
                </thead>
                <tbody>
                    <tr><td>PAY-001</td><td>INV-002</td><td>Wind Power ME</td><td>AED 310,000</td><td>2026-03-08</td><td>Bank Transfer</td><td><span class="status-badge paid">Paid</span></td></tr>
                    <tr><td>PAY-002</td><td>INV-001</td><td>Desert Solar LLC</td><td>AED 62,500</td><td>2026-03-12</td><td>Cheque</td><td><span class="status-badge paid">Paid</span></td></tr>
                </tbody>
            </table>
        </div>
    `;
}

// ==========================================
// EXPENSES PAGE
// ==========================================
function renderExpenses() {
    return `
        <div class="page-header">
            <h1 class="page-title">EXPENSES</h1>
            <button class="btn btn-primary" onclick="showToast('Add Expense form coming soon', 'warning')">Add Expense</button>
        </div>
        <div class="data-table-wrapper">
            <table class="data-table">
                <thead>
                    <tr><th>Expense ID</th><th>Category</th><th>Description</th><th>Amount</th><th>Date</th><th>Status</th></tr>
                </thead>
                <tbody>
                    <tr><td>EXP-001</td><td>Travel</td><td>Client visit - Abu Dhabi</td><td>AED 1,200</td><td>2026-03-10</td><td><span class="status-badge completed">Approved</span></td></tr>
                    <tr><td>EXP-002</td><td>Marketing</td><td>Social media ads</td><td>AED 3,500</td><td>2026-03-08</td><td><span class="status-badge completed">Approved</span></td></tr>
                    <tr><td>EXP-003</td><td>Office</td><td>Supplies and equipment</td><td>AED 850</td><td>2026-03-12</td><td><span class="status-badge pending">Pending</span></td></tr>
                </tbody>
            </table>
        </div>
    `;
}

// ==========================================
// PROFILE PAGE
// ==========================================
function renderProfile() {
    return `
        <div class="page-header">
            <h1 class="page-title">PROFILE</h1>
        </div>
        <div class="profile-card">
            <div class="profile-header">
                <div class="profile-img">
                    <img src="https://ui-avatars.com/api/?name=Julia+Hudda&background=e8d5d0&color=333&size=100" alt="Julia Hudda">
                </div>
                <div class="profile-info">
                    <h3>Julia Hudda</h3>
                    <p>Sales Manager - Green Growth</p>
                </div>
            </div>
            <form>
                <div class="form-group">
                    <label>Full Name</label>
                    <input type="text" value="Julia Hudda">
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" value="julia.hudda@greengrowth.ae">
                </div>
                <div class="form-group">
                    <label>Phone</label>
                    <input type="tel" value="+971 50 123 4567">
                </div>
                <div class="form-group">
                    <label>Role</label>
                    <input type="text" value="Sales Manager" readonly>
                </div>
                <div class="form-group">
                    <label>Department</label>
                    <select>
                        <option selected>Sales</option>
                        <option>Marketing</option>
                        <option>Operations</option>
                        <option>Finance</option>
                    </select>
                </div>
                <button type="button" class="btn btn-primary" onclick="showToast('Profile updated successfully!', 'success')">Save Changes</button>
            </form>
        </div>
    `;
}

// ==========================================
// COMPANY PAGE
// ==========================================
function renderCompany() {
    return `
        <div class="page-header">
            <h1 class="page-title">COMPANY SETTINGS</h1>
        </div>
        <div class="profile-card">
            <form>
                <div class="form-group">
                    <label>Company Name</label>
                    <input type="text" value="Green Growth">
                </div>
                <div class="form-group">
                    <label>Industry</label>
                    <input type="text" value="Sustainable Energy & Agriculture">
                </div>
                <div class="form-group">
                    <label>Address</label>
                    <textarea rows="3">Business Bay, Dubai, UAE</textarea>
                </div>
                <div class="form-group">
                    <label>Phone</label>
                    <input type="tel" value="+971 4 123 4567">
                </div>
                <div class="form-group">
                    <label>Website</label>
                    <input type="url" value="www.greengrowth.ae">
                </div>
                <button type="button" class="btn btn-primary" onclick="showToast('Company settings updated!', 'success')">Save Changes</button>
            </form>
        </div>
    `;
}

// ==========================================
// USERS PAGE
// ==========================================
function renderUsers() {
    return `
        <div class="page-header">
            <h1 class="page-title">USERS</h1>
            <button class="btn btn-primary" onclick="showToast('Add User form coming soon', 'warning')">Add User</button>
        </div>
        <div class="data-table-wrapper">
            <table class="data-table">
                <thead>
                    <tr><th>Name</th><th>Email</th><th>Role</th><th>Department</th><th>Status</th><th>Actions</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Julia Hudda</td><td>julia.hudda@greengrowth.ae</td><td>Admin</td><td>Sales</td>
                        <td><span class="status-badge active">Active</span></td>
                        <td><div class="action-btns"><button class="action-btn edit"><i class="fa-solid fa-pen"></i></button></div></td>
                    </tr>
                    <tr>
                        <td>Ahmad Al Rashid</td><td>ahmad@greengrowth.ae</td><td>Sales Rep</td><td>Sales</td>
                        <td><span class="status-badge active">Active</span></td>
                        <td><div class="action-btns"><button class="action-btn edit"><i class="fa-solid fa-pen"></i></button><button class="action-btn delete"><i class="fa-solid fa-trash"></i></button></div></td>
                    </tr>
                    <tr>
                        <td>Fatima Hassan</td><td>fatima@greengrowth.ae</td><td>Marketing</td><td>Marketing</td>
                        <td><span class="status-badge active">Active</span></td>
                        <td><div class="action-btns"><button class="action-btn edit"><i class="fa-solid fa-pen"></i></button><button class="action-btn delete"><i class="fa-solid fa-trash"></i></button></div></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
}

// ==========================================
// COMING SOON (placeholder)
// ==========================================
function renderComingSoon() {
    return `
        <div class="empty-state">
            <i class="fa-solid fa-hammer"></i>
            <h3>Coming Soon</h3>
            <p>This feature is under development.</p>
        </div>
    `;
}

// ==========================================
// Utility Functions
// ==========================================
function exportTable(type) {
    showToast(`${type.charAt(0).toUpperCase() + type.slice(1)} export initiated`, 'success');
}

function toggleColumns() {
    showToast('Column visibility toggle coming soon', 'warning');
}

// ==========================================
// Initialize App
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Open Sales submenu by default and render Deals
    const salesSubmenu = document.getElementById('submenu-sales');
    const salesToggle = document.querySelector('[data-submenu="sales"]');
    if (salesSubmenu) salesSubmenu.classList.add('open');
    if (salesToggle) salesToggle.classList.add('expanded');

    renderPage('deals');
});
