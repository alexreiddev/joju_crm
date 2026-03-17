/* ==========================================
   GREEN GROWTH CRM - Fully Functional Application
   ========================================== */

// ==========================================
// Default Data (used on first load)
// ==========================================
const DEFAULT_DATA = {
    deals: [
        { id: 1, owner: 'Julia Hudda', name: 'Dealer', account: 'Green Corp', amount: 15000, date: '2026-03-19', stage: 'New', source: 'Cold Call', contact: '+971 50 123 4567', description: '' },
        { id: 2, owner: 'Julia Hudda', name: 'Dealer', account: 'Eco Solutions', amount: 28000, date: '2026-04-01', stage: 'Qualification', source: 'Email', contact: '+971 55 234 5678', description: '' },
        { id: 3, owner: 'Julia Hudda', name: 'Dealer', account: 'Solar Plus', amount: 45000, date: '2026-03-25', stage: 'Proposal', source: 'Website', contact: '+971 52 345 6789', description: '' },
        { id: 4, owner: 'Julia Hudda', name: 'Dealer', account: 'Wind Energy LLC', amount: 62000, date: '2026-04-10', stage: 'Won', source: 'Referral', contact: '+971 56 456 7890', description: '' },
        { id: 5, owner: 'Julia Hudda', name: 'Dealer', account: 'Bio Farms', amount: 8500, date: '2026-03-15', stage: 'Lost', source: 'Social Media', contact: '+971 50 567 8901', description: '' },
        { id: 6, owner: 'Julia Hudda', name: 'Dealer', account: 'Clean Water Co', amount: 33000, date: '2026-04-05', stage: 'New', source: 'Cold Call', contact: '+971 55 678 9012', description: '' },
        { id: 7, owner: 'Julia Hudda', name: 'Dealer', account: 'Recycle Tech', amount: 19000, date: '2026-03-28', stage: 'Negotiation', source: 'Advertisement', contact: '+971 52 789 0123', description: '' },
        { id: 8, owner: 'Julia Hudda', name: 'Dealer', account: 'Green Build', amount: 71000, date: '2026-04-15', stage: 'Won', source: 'Referral', contact: '+971 56 890 1234', description: '' },
        { id: 9, owner: 'Julia Hudda', name: 'Dealer', account: 'Eco Transport', amount: 12000, date: '2026-03-22', stage: 'New', source: 'Website', contact: '+971 50 901 2345', description: '' },
        { id: 10, owner: 'Julia Hudda', name: 'Dealer', account: 'Nature Foods', amount: 25000, date: '2026-04-08', stage: 'Qualification', source: 'Email', contact: '+971 55 012 3456', description: '' },
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
        { id: 1, subject: 'Follow up with Ahmad', dueDate: '2026-03-15', priority: 'High', status: 'Pending', assignedTo: 'Julia Hudda', description: '' },
        { id: 2, subject: 'Send proposal to Green Oasis', dueDate: '2026-03-16', priority: 'Medium', status: 'Completed', assignedTo: 'Julia Hudda', description: '' },
        { id: 3, subject: 'Review contract terms', dueDate: '2026-03-18', priority: 'High', status: 'Pending', assignedTo: 'Julia Hudda', description: '' },
        { id: 4, subject: 'Schedule site visit', dueDate: '2026-03-20', priority: 'Low', status: 'Pending', assignedTo: 'Julia Hudda', description: '' },
        { id: 5, subject: 'Update CRM records', dueDate: '2026-03-14', priority: 'Medium', status: 'Completed', assignedTo: 'Julia Hudda', description: '' },
    ],
    meetings: [
        { id: 1, title: 'Q1 Sales Review', date: '2026-03-15', time: '10:00', location: 'Conference Room A', attendees: 'Julia, Ahmad, Sara', status: 'Scheduled', notes: '' },
        { id: 2, title: 'Product Demo - Eco Build', date: '2026-03-16', time: '14:00', location: 'Client Office', attendees: 'Julia, Omar', status: 'Scheduled', notes: '' },
        { id: 3, title: 'Partnership Discussion', date: '2026-03-18', time: '11:00', location: 'Virtual - Zoom', attendees: 'Julia, Khalid, Fatima', status: 'Completed', notes: '' },
        { id: 4, title: 'Budget Planning', date: '2026-03-20', time: '09:00', location: 'Board Room', attendees: 'Julia, Management', status: 'Scheduled', notes: '' },
    ],
    calls: [
        { id: 1, contact: 'Ahmad Al Rashid', date: '2026-03-14', time: '09:30', duration: '15', type: 'Outbound', notes: 'Discussed pricing options', status: 'Completed' },
        { id: 2, contact: 'Fatima Hassan', date: '2026-03-14', time: '11:00', duration: '25', type: 'Inbound', notes: 'Follow-up on proposal', status: 'Completed' },
        { id: 3, contact: 'Omar Khalil', date: '2026-03-15', time: '10:00', duration: '', type: 'Outbound', notes: 'Schedule product demo', status: 'Scheduled' },
        { id: 4, contact: 'Sara Mohammed', date: '2026-03-15', time: '14:30', duration: '', type: 'Outbound', notes: 'Contract negotiation', status: 'Scheduled' },
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
        { id: 'INV-001', client: 'Desert Solar LLC', amount: 125000, date: '2026-03-10', dueDate: '2026-04-10', status: 'Pending', notes: '' },
        { id: 'INV-002', client: 'Wind Power ME', amount: 310000, date: '2026-03-05', dueDate: '2026-04-05', status: 'Paid', notes: '' },
        { id: 'INV-003', client: 'Green Oasis', amount: 45000, date: '2026-03-11', dueDate: '2026-04-11', status: 'Pending', notes: '' },
        { id: 'INV-004', client: 'Eco Build Dubai', amount: 68000, date: '2026-02-15', dueDate: '2026-03-15', status: 'Overdue', notes: '' },
    ],
    payments: [
        { id: 'PAY-001', invoice: 'INV-002', client: 'Wind Power ME', amount: 310000, date: '2026-03-08', method: 'Bank Transfer', status: 'Paid' },
        { id: 'PAY-002', invoice: 'INV-001', client: 'Desert Solar LLC', amount: 62500, date: '2026-03-12', method: 'Cheque', status: 'Paid' },
    ],
    expenses: [
        { id: 1, category: 'Travel', description: 'Client visit - Abu Dhabi', amount: 1200, date: '2026-03-10', status: 'Approved' },
        { id: 2, category: 'Marketing', description: 'Social media ads', amount: 3500, date: '2026-03-08', status: 'Approved' },
        { id: 3, category: 'Office', description: 'Supplies and equipment', amount: 850, date: '2026-03-12', status: 'Pending' },
    ],
    users: [
        { id: 1, name: 'Julia Hudda', email: 'julia.hudda@greengrowth.ae', role: 'Admin', department: 'Sales', status: 'Active' },
        { id: 2, name: 'Ahmad Al Rashid', email: 'ahmad@greengrowth.ae', role: 'Sales Rep', department: 'Sales', status: 'Active' },
        { id: 3, name: 'Fatima Hassan', email: 'fatima@greengrowth.ae', role: 'Marketing', department: 'Marketing', status: 'Active' },
    ],
    campaigns: [
        { id: 1, name: 'Q1 Email Blast', type: 'Email', status: 'Active', startDate: '2026-01-15', budget: 5000, leads: 120 },
        { id: 2, name: 'Social Media Push', type: 'Social', status: 'Active', startDate: '2026-02-01', budget: 8000, leads: 185 },
        { id: 3, name: 'Trade Show - WETEX', type: 'Event', status: 'Planned', startDate: '2026-04-10', budget: 25000, leads: 0 },
        { id: 4, name: 'Google Ads Campaign', type: 'PPC', status: 'Active', startDate: '2026-03-01', budget: 12000, leads: 37 },
    ],
    attendance: [
        { id: 1, employee: 'Julia Hudda', date: '2026-03-14', checkIn: '09:00', checkOut: '18:00', hours: '9h', status: 'Present' },
        { id: 2, employee: 'Ahmad Al Rashid', date: '2026-03-14', checkIn: '09:15', checkOut: '18:00', hours: '8h 45m', status: 'Late' },
        { id: 3, employee: 'Fatima Hassan', date: '2026-03-14', checkIn: '08:55', checkOut: '17:30', hours: '8h 35m', status: 'Present' },
        { id: 4, employee: 'Omar Khalil', date: '2026-03-14', checkIn: '', checkOut: '', hours: '', status: 'Absent' },
        { id: 5, employee: 'Sara Mohammed', date: '2026-03-14', checkIn: '', checkOut: '', hours: '', status: 'On Leave' },
    ],
    profile: {
        name: 'Julia Hudda', email: 'julia.hudda@greengrowth.ae', phone: '+971 50 123 4567', role: 'Sales Manager', department: 'Sales'
    },
    company: {
        name: 'Green Growth', industry: 'Sustainable Energy & Agriculture', address: 'Business Bay, Dubai, UAE', phone: '+971 4 123 4567', website: 'www.greengrowth.ae'
    },
    activityLog: []
};

// ==========================================
// localStorage Persistence
// ==========================================
function loadData() {
    const saved = localStorage.getItem('greenGrowthCRM');
    if (saved) {
        try {
            return JSON.parse(saved);
        } catch (e) {
            return JSON.parse(JSON.stringify(DEFAULT_DATA));
        }
    }
    return JSON.parse(JSON.stringify(DEFAULT_DATA));
}

function saveData() {
    localStorage.setItem('greenGrowthCRM', JSON.stringify(AppData));
}

function logActivity(text, type) {
    const colors = { create: 'green', update: 'blue', delete: 'red', info: 'orange' };
    AppData.activityLog.unshift({ text, color: colors[type] || 'blue', time: new Date().toISOString() });
    if (AppData.activityLog.length > 50) AppData.activityLog.length = 50;
    saveData();
}

let AppData = loadData();

// ==========================================
// Login System
// ==========================================
const USERS = [
    { name: 'Julia Hudda', role: 'Admin', pin: '1234' },
    { name: 'Ahmad Al Rashid', role: 'Sales Rep', pin: '1234' },
    { name: 'Fatima Hassan', role: 'Marketing', pin: '1234' },
];

let loggedInUser = null;

function renderLoginScreen() {
    const userOptions = USERS.map(u => '<option value="' + u.name + '">' + u.name + ' (' + u.role + ')</option>').join('');
    mainContent.innerHTML =
        '<div class="login-screen">' +
        '<div class="login-card">' +
        '<div class="login-logo"><i class="fa-solid fa-leaf"></i></div>' +
        '<h1>Green Growth</h1>' +
        '<p class="login-subtitle">CRM & Business Management</p>' +
        '<div class="form-group"><label>Select User</label><select id="loginUser">' + userOptions + '</select></div>' +
        '<div class="form-group"><label>Enter PIN</label>' +
        '<div class="pin-input-group"><input type="password" maxlength="1" class="pin-digit" data-index="0"><input type="password" maxlength="1" class="pin-digit" data-index="1"><input type="password" maxlength="1" class="pin-digit" data-index="2"><input type="password" maxlength="1" class="pin-digit" data-index="3"></div></div>' +
        '<div class="login-error" id="loginError"></div>' +
        '<button class="login-btn" id="loginBtn">Sign In</button>' +
        '<p class="login-hint">Default PIN: 1234</p>' +
        '</div></div>';
    bindLoginEvents();
}

function bindLoginEvents() {
    const pinDigits = document.querySelectorAll('.pin-digit');
    pinDigits.forEach((input, i) => {
        input.addEventListener('input', () => {
            if (input.value.length === 1 && i < pinDigits.length - 1) {
                pinDigits[i + 1].focus();
            }
        });
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && !input.value && i > 0) {
                pinDigits[i - 1].focus();
            }
            if (e.key === 'Enter') {
                document.getElementById('loginBtn').click();
            }
        });
    });

    document.getElementById('loginBtn').addEventListener('click', () => {
        const selectedName = document.getElementById('loginUser').value;
        const pin = Array.from(pinDigits).map(d => d.value).join('');
        const user = USERS.find(u => u.name === selectedName);
        if (!user) { document.getElementById('loginError').textContent = 'Please select a user'; return; }
        if (pin !== user.pin) { document.getElementById('loginError').textContent = 'Incorrect PIN. Try 1234'; pinDigits.forEach(d => { d.value = ''; }); pinDigits[0].focus(); return; }

        loggedInUser = user;
        sessionStorage.setItem('loggedInUser', JSON.stringify(user));
        enterApp();
    });
}

function enterApp() {
    document.body.classList.remove('login-mode');
    // Update sidebar profile
    const initials = loggedInUser.name.split(' ').map(w => w[0]).join('');
    const sidebarAvatar = document.getElementById('sidebarAvatar');
    const sidebarName = document.getElementById('sidebarName');
    const sidebarRole = document.getElementById('sidebarRole');
    const navAvatar = document.getElementById('navAvatar');
    if (sidebarAvatar) sidebarAvatar.textContent = initials;
    if (sidebarName) sidebarName.textContent = loggedInUser.name;
    if (sidebarRole) sidebarRole.textContent = loggedInUser.role;
    if (navAvatar) navAvatar.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(loggedInUser.name) + '&background=e8d5d0&color=333&size=40';
    // Open sales submenu by default
    const salesSubmenu = document.getElementById('submenu-sales');
    const salesToggle = document.querySelector('[data-submenu="sales"]');
    if (salesSubmenu) salesSubmenu.classList.add('open');
    if (salesToggle) salesToggle.classList.add('expanded');
    navigateTo('deals');
}

function logout() {
    loggedInUser = null;
    sessionStorage.removeItem('loggedInUser');
    document.body.classList.add('login-mode');
    renderLoginScreen();
}

// ==========================================
// App State
// ==========================================
let currentPage = 'deals';
let tableState = { sortCol: null, sortDir: 'asc', search: '', filter: '', page: 1, perPage: 10 };

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
const crudModal = document.getElementById('crudModal');
const deleteModalEl = document.getElementById('deleteModal');

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
        const submenu = document.getElementById('submenu-' + submenuId);
        const isOpen = submenu.classList.contains('open');
        document.querySelectorAll('.submenu').forEach(s => s.classList.remove('open'));
        document.querySelectorAll('.submenu-toggle').forEach(t => t.classList.remove('expanded'));
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
        sidebar.classList.remove('open');
        sidebarOverlay.classList.remove('active');
    });
});

function navigateTo(page) {
    currentPage = page;
    tableState = { sortCol: null, sortDir: 'asc', search: '', filter: '', page: 1, perPage: 10 };
    document.querySelectorAll('.menu-link').forEach(l => l.classList.remove('active'));
    const activeLink = document.querySelector('.menu-link[data-page="' + page + '"]');
    if (activeLink) {
        activeLink.classList.add('active');
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
// Global Search
// ==========================================
searchToggle.addEventListener('click', () => {
    searchOverlay.classList.add('active');
    document.getElementById('globalSearch').value = '';
    document.getElementById('globalSearch').focus();
});

searchClose.addEventListener('click', () => searchOverlay.classList.remove('active'));
searchOverlay.addEventListener('click', (e) => { if (e.target === searchOverlay) searchOverlay.classList.remove('active'); });

document.getElementById('globalSearch').addEventListener('input', function() {
    const q = this.value.toLowerCase().trim();
    let resultsHtml = '';
    if (q.length >= 2) {
        const results = [];
        AppData.deals.forEach(d => { if ((d.name + ' ' + d.account + ' ' + d.owner).toLowerCase().includes(q)) results.push({ title: d.account + ' - ' + d.name, sub: 'Deal - AED ' + d.amount.toLocaleString(), page: 'deals', icon: 'fa-handshake', bg: '#e8f5e9', color: '#2e7d32' }); });
        AppData.leads.forEach(l => { if ((l.name + ' ' + l.company + ' ' + l.email).toLowerCase().includes(q)) results.push({ title: l.name, sub: 'Lead - ' + l.company, page: 'leads', icon: 'fa-users', bg: '#e3f2fd', color: '#1565c0' }); });
        AppData.contacts.forEach(c => { if ((c.name + ' ' + c.company + ' ' + c.email).toLowerCase().includes(q)) results.push({ title: c.name, sub: 'Contact - ' + c.company, page: 'contacts', icon: 'fa-address-book', bg: '#ede7f6', color: '#673ab7' }); });
        AppData.accounts.forEach(a => { if ((a.name + ' ' + a.industry).toLowerCase().includes(q)) results.push({ title: a.name, sub: 'Account - ' + a.industry, page: 'accounts', icon: 'fa-building', bg: '#fff3e0', color: '#ef6c00' }); });
        AppData.tasks.forEach(t => { if (t.subject.toLowerCase().includes(q)) results.push({ title: t.subject, sub: 'Task - ' + t.status, page: 'tasks', icon: 'fa-list-check', bg: '#fce4ec', color: '#c62828' }); });
        AppData.invoices.forEach(i => { if ((i.id + ' ' + i.client).toLowerCase().includes(q)) results.push({ title: i.id, sub: 'Invoice - ' + i.client, page: 'invoices', icon: 'fa-file-invoice', bg: '#e8f5e9', color: '#1b5e20' }); });
        if (results.length === 0) {
            resultsHtml = '<div style="text-align:center;padding:20px;color:#adb5bd">No results found</div>';
        } else {
            resultsHtml = results.slice(0, 10).map(r => '<div class="search-result-item" onclick="searchOverlay.classList.remove(\'active\');navigateTo(\'' + r.page + '\')"><div class="search-result-icon" style="background:' + r.bg + ';color:' + r.color + '"><i class="fa-solid ' + r.icon + '"></i></div><div class="search-result-info"><div class="result-title">' + r.title + '</div><div class="result-sub">' + r.sub + '</div></div></div>').join('');
        }
    }
    let container = document.getElementById('globalSearchResults');
    if (!container) {
        container = document.createElement('div');
        container.id = 'globalSearchResults';
        container.className = 'search-results';
        this.parentElement.appendChild(container);
    }
    container.innerHTML = resultsHtml;
});

// ==========================================
// Modal System
// ==========================================
function openModal(title, bodyHtml, footerHtml) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalBody').innerHTML = bodyHtml;
    document.getElementById('modalFooter').innerHTML = footerHtml;
    crudModal.classList.add('active');
}

function closeModal() {
    crudModal.classList.remove('active');
}

document.getElementById('closeModal').addEventListener('click', closeModal);
crudModal.addEventListener('click', (e) => { if (e.target === crudModal) closeModal(); });

// Delete modal
let pendingDeleteFn = null;
function openDeleteModal(message, onConfirm) {
    document.getElementById('deleteMessage').textContent = message;
    pendingDeleteFn = onConfirm;
    deleteModalEl.classList.add('active');
}
function closeDeleteModal() {
    deleteModalEl.classList.remove('active');
    pendingDeleteFn = null;
}
document.getElementById('confirmDeleteBtn').addEventListener('click', () => {
    if (pendingDeleteFn) pendingDeleteFn();
    closeDeleteModal();
});
deleteModalEl.addEventListener('click', (e) => { if (e.target === deleteModalEl) closeDeleteModal(); });

// ==========================================
// Toast Notifications
// ==========================================
function showToast(message, type) {
    type = type || 'success';
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = 'toast ' + type;
    const icon = type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle';
    toast.innerHTML = '<i class="fa-solid ' + icon + '"></i> ' + message;
    container.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateX(100%)'; setTimeout(() => toast.remove(), 300); }, 3000);
}

// ==========================================
// Utility: Next ID
// ==========================================
function nextId(arr) {
    if (arr.length === 0) return 1;
    return Math.max(...arr.map(item => typeof item.id === 'number' ? item.id : 0)) + 1;
}

function nextStringId(prefix, arr) {
    const nums = arr.map(item => parseInt(String(item.id).replace(prefix + '-', '')) || 0);
    const next = (nums.length > 0 ? Math.max(...nums) : 0) + 1;
    return prefix + '-' + String(next).padStart(3, '0');
}

// ==========================================
// Utility: Build form HTML
// ==========================================
function buildForm(fields, data) {
    return fields.map(f => {
        const val = data ? (data[f.key] !== undefined ? data[f.key] : '') : (f.default || '');
        if (f.type === 'select') {
            return '<div class="form-group"><label>' + f.label + '</label><select name="' + f.key + '">' + f.options.map(o => '<option value="' + o + '"' + (val === o ? ' selected' : '') + '>' + o + '</option>').join('') + '</select></div>';
        } else if (f.type === 'textarea') {
            return '<div class="form-group"><label>' + f.label + '</label><textarea name="' + f.key + '" rows="3" placeholder="' + (f.placeholder || '') + '">' + val + '</textarea></div>';
        } else {
            return '<div class="form-group"><label>' + f.label + '</label><input type="' + (f.type || 'text') + '" name="' + f.key + '" value="' + val + '" placeholder="' + (f.placeholder || '') + '"' + (f.required ? ' required' : '') + '></div>';
        }
    }).join('');
}

function buildDetail(fields, data) {
    return '<div class="detail-grid">' + fields.map(f => {
        let val = data[f.key] !== undefined ? data[f.key] : '';
        if (f.key === 'amount' || f.key === 'revenue' || f.key === 'budget') val = 'AED ' + Number(val).toLocaleString();
        return '<div class="detail-row"><div class="detail-label">' + f.label + '</div><div class="detail-value">' + val + '</div></div>';
    }).join('') + '</div>';
}

function getFormData(container) {
    const data = {};
    container.querySelectorAll('input, select, textarea').forEach(el => {
        if (el.name) data[el.name] = el.value;
    });
    return data;
}

// ==========================================
// Export Functions
// ==========================================
function exportTable(type) {
    const table = document.querySelector('.data-table');
    if (!table) { showToast('No table found to export', 'error'); return; }
    const headers = [];
    const rows = [];
    table.querySelectorAll('thead th').forEach(th => {
        const text = th.textContent.replace(/[\u25B2\u25BC]/g, '').trim();
        if (text !== 'Actions') headers.push(text);
    });
    table.querySelectorAll('tbody tr').forEach(tr => {
        if (tr.style.display === 'none') return;
        const row = [];
        const tds = tr.querySelectorAll('td');
        tds.forEach((td, i) => {
            if (i < headers.length) row.push(td.textContent.trim());
        });
        if (row.length) rows.push(row);
    });

    if (type === 'copy') {
        const text = headers.join('\t') + '\n' + rows.map(r => r.join('\t')).join('\n');
        navigator.clipboard.writeText(text).then(() => showToast('Table copied to clipboard!', 'success')).catch(() => {
            const ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
            showToast('Table copied to clipboard!', 'success');
        });
    } else if (type === 'excel') {
        let csv = headers.join(',') + '\n' + rows.map(r => r.map(c => '"' + c.replace(/"/g, '""') + '"').join(',')).join('\n');
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = currentPage + '_export.csv';
        link.click();
        showToast('CSV file downloaded!', 'success');
    } else if (type === 'pdf') {
        const printWin = window.open('', '_blank');
        printWin.document.write('<html><head><title>' + currentPage.toUpperCase() + ' Export</title><style>body{font-family:Arial,sans-serif;padding:20px}table{width:100%;border-collapse:collapse;margin-top:20px}th,td{border:1px solid #ddd;padding:10px;text-align:left;font-size:13px}th{background:#1a5c2e;color:white}tr:nth-child(even){background:#f2f2f2}h1{color:#1a5c2e;font-size:22px}</style></head><body>');
        printWin.document.write('<h1>Green Growth CRM - ' + currentPage.charAt(0).toUpperCase() + currentPage.slice(1) + '</h1>');
        printWin.document.write('<table><thead><tr>' + headers.map(h => '<th>' + h + '</th>').join('') + '</tr></thead><tbody>');
        rows.forEach(r => { printWin.document.write('<tr>' + r.map(c => '<td>' + c + '</td>').join('') + '</tr>'); });
        printWin.document.write('</tbody></table></body></html>');
        printWin.document.close();
        printWin.focus();
        setTimeout(() => { printWin.print(); }, 500);
        showToast('PDF print dialog opened!', 'success');
    }
}

// ==========================================
// Table Sorting
// ==========================================
function sortTable(colIndex) {
    if (tableState.sortCol === colIndex) {
        tableState.sortDir = tableState.sortDir === 'asc' ? 'desc' : 'asc';
    } else {
        tableState.sortCol = colIndex;
        tableState.sortDir = 'asc';
    }
    tableState.page = 1;
    renderPage(currentPage);
}

// ==========================================
// Pagination helper
// ==========================================
function paginate(arr) {
    const total = arr.length;
    const totalPages = Math.max(1, Math.ceil(total / tableState.perPage));
    if (tableState.page > totalPages) tableState.page = totalPages;
    const start = (tableState.page - 1) * tableState.perPage;
    const end = start + tableState.perPage;
    return { items: arr.slice(start, end), total, totalPages, start, end: Math.min(end, total) };
}

function renderPagination(info) {
    let pages = '';
    for (let i = 1; i <= info.totalPages; i++) {
        pages += '<button class="page-btn' + (i === tableState.page ? ' active' : '') + '" onclick="tableState.page=' + i + ';renderPage(\'' + currentPage + '\')">' + i + '</button>';
    }
    return '<div class="table-pagination"><span class="page-info">Showing ' + (info.start + 1) + ' to ' + info.end + ' of ' + info.total + ' entries</span><div class="page-nav"><button class="page-btn" onclick="if(tableState.page>1){tableState.page--;renderPage(\'' + currentPage + '\')}"><i class="fa-solid fa-chevron-left"></i></button>' + pages + '<button class="page-btn" onclick="if(tableState.page<' + info.totalPages + '){tableState.page++;renderPage(\'' + currentPage + '\')}"><i class="fa-solid fa-chevron-right"></i></button></div></div>';
}

// ==========================================
// Page Renderer
// ==========================================
function renderPage(page) {
    const pages = {
        dashboard: renderDashboard, deals: renderDeals, leads: renderLeads, contacts: renderContacts,
        accounts: renderAccounts, forecast: renderForecast, campaign: renderCampaign, tasks: renderTasks,
        meetings: renderMeetings, calls: renderCalls, attendance: renderAttendance,
        'pending-orders': renderPendingOrders, 'shipped-orders': renderShippedOrders,
        invoices: renderInvoices, payments: renderPayments, expenses: renderExpenses,
        profile: renderProfile, company: renderCompany, users: renderUsers,
    };
    const renderer = pages[page] || renderComingSoon;
    mainContent.innerHTML = renderer();
    bindPageEvents(page);
}

// ==========================================
// Bind Page Events
// ==========================================
function bindPageEvents(page) {
    const searchInput = document.getElementById('tableSearch');
    if (searchInput) {
        searchInput.value = tableState.search;
        searchInput.addEventListener('input', (e) => {
            tableState.search = e.target.value.toLowerCase();
            tableState.page = 1;
            renderPage(currentPage);
            const newInput = document.getElementById('tableSearch');
            if (newInput) { newInput.focus(); newInput.setSelectionRange(newInput.value.length, newInput.value.length); }
        });
    }
    const filterSelect = document.getElementById('positionFilter');
    if (filterSelect) {
        filterSelect.value = tableState.filter || 'all';
        filterSelect.addEventListener('change', (e) => {
            tableState.filter = e.target.value.toLowerCase();
            tableState.page = 1;
            renderPage(currentPage);
        });
    }
}


// ==========================================
// FIELD DEFINITIONS for each module
// ==========================================
const FIELDS = {
    deals: [
        { key: 'owner', label: 'Deal Owner', default: 'Julia Hudda' },
        { key: 'name', label: 'Deal Name', required: true },
        { key: 'account', label: 'Account Name' },
        { key: 'amount', label: 'Amount', type: 'number' },
        { key: 'date', label: 'Closing Date', type: 'date' },
        { key: 'stage', label: 'Stage', type: 'select', options: ['New','Qualification','Proposal','Negotiation','Won','Lost'] },
        { key: 'source', label: 'Lead Source', type: 'select', options: ['Cold Call','Email','Website','Referral','Social Media','Advertisement'] },
        { key: 'contact', label: 'Contact Phone' },
        { key: 'description', label: 'Description', type: 'textarea' },
    ],
    leads: [
        { key: 'name', label: 'Full Name', required: true },
        { key: 'company', label: 'Company', required: true },
        { key: 'email', label: 'Email', type: 'email' },
        { key: 'phone', label: 'Phone', type: 'tel' },
        { key: 'source', label: 'Lead Source', type: 'select', options: ['Website','Referral','Cold Call','Email','Social Media','Advertisement'] },
        { key: 'status', label: 'Status', type: 'select', options: ['New','Qualified','Proposal','Won','Lost'] },
        { key: 'created', label: 'Created Date', type: 'date' },
    ],
    contacts: [
        { key: 'name', label: 'Full Name', required: true },
        { key: 'email', label: 'Email', type: 'email' },
        { key: 'phone', label: 'Phone', type: 'tel' },
        { key: 'company', label: 'Company' },
        { key: 'position', label: 'Position', type: 'select', options: ['CEO','Director','Manager','VP Sales','CTO','Owner','Engineer','Other'] },
        { key: 'status', label: 'Status', type: 'select', options: ['Active','Inactive'] },
    ],
    accounts: [
        { key: 'name', label: 'Account Name', required: true },
        { key: 'industry', label: 'Industry', type: 'select', options: ['Solar Energy','Agriculture','Construction','Water Treatment','Wind Energy','Technology','Other'] },
        { key: 'phone', label: 'Phone', type: 'tel' },
        { key: 'website', label: 'Website' },
        { key: 'owner', label: 'Owner', default: 'Julia Hudda' },
        { key: 'revenue', label: 'Annual Revenue', type: 'number' },
        { key: 'status', label: 'Status', type: 'select', options: ['Active','Inactive'] },
    ],
    tasks: [
        { key: 'subject', label: 'Subject', required: true },
        { key: 'dueDate', label: 'Due Date', type: 'date' },
        { key: 'priority', label: 'Priority', type: 'select', options: ['High','Medium','Low'] },
        { key: 'status', label: 'Status', type: 'select', options: ['Pending','In Progress','Completed'] },
        { key: 'assignedTo', label: 'Assigned To', default: 'Julia Hudda' },
        { key: 'description', label: 'Description', type: 'textarea' },
    ],
    meetings: [
        { key: 'title', label: 'Meeting Title', required: true },
        { key: 'date', label: 'Date', type: 'date' },
        { key: 'time', label: 'Time', type: 'time' },
        { key: 'location', label: 'Location' },
        { key: 'attendees', label: 'Attendees' },
        { key: 'status', label: 'Status', type: 'select', options: ['Scheduled','Completed','Cancelled'] },
        { key: 'notes', label: 'Notes', type: 'textarea' },
    ],
    calls: [
        { key: 'contact', label: 'Contact Name', required: true },
        { key: 'date', label: 'Date', type: 'date' },
        { key: 'time', label: 'Time', type: 'time' },
        { key: 'duration', label: 'Duration (min)' },
        { key: 'type', label: 'Type', type: 'select', options: ['Inbound','Outbound'] },
        { key: 'status', label: 'Status', type: 'select', options: ['Scheduled','Completed','Missed'] },
        { key: 'notes', label: 'Notes', type: 'textarea' },
    ],
    invoices: [
        { key: 'client', label: 'Client', required: true },
        { key: 'amount', label: 'Amount', type: 'number', required: true },
        { key: 'date', label: 'Invoice Date', type: 'date' },
        { key: 'dueDate', label: 'Due Date', type: 'date' },
        { key: 'status', label: 'Status', type: 'select', options: ['Pending','Paid','Overdue','Cancelled'] },
        { key: 'notes', label: 'Notes', type: 'textarea' },
    ],
    expenses: [
        { key: 'category', label: 'Category', type: 'select', options: ['Travel','Marketing','Office','Utilities','Salary','Other'] },
        { key: 'description', label: 'Description', required: true },
        { key: 'amount', label: 'Amount', type: 'number', required: true },
        { key: 'date', label: 'Date', type: 'date' },
        { key: 'status', label: 'Status', type: 'select', options: ['Pending','Approved','Rejected'] },
    ],
    users: [
        { key: 'name', label: 'Full Name', required: true },
        { key: 'email', label: 'Email', type: 'email', required: true },
        { key: 'role', label: 'Role', type: 'select', options: ['Admin','Sales Rep','Marketing','Manager','Finance'] },
        { key: 'department', label: 'Department', type: 'select', options: ['Sales','Marketing','Operations','Finance','HR'] },
        { key: 'status', label: 'Status', type: 'select', options: ['Active','Inactive'] },
    ],
    campaigns: [
        { key: 'name', label: 'Campaign Name', required: true },
        { key: 'type', label: 'Type', type: 'select', options: ['Email','Social','Event','PPC','Content'] },
        { key: 'status', label: 'Status', type: 'select', options: ['Active','Planned','Completed','Paused'] },
        { key: 'startDate', label: 'Start Date', type: 'date' },
        { key: 'budget', label: 'Budget', type: 'number' },
        { key: 'leads', label: 'Leads Generated', type: 'number' },
    ],
    pendingOrders: [
        { key: 'customer', label: 'Customer', required: true },
        { key: 'items', label: 'Items', required: true },
        { key: 'amount', label: 'Amount', type: 'number' },
        { key: 'date', label: 'Order Date', type: 'date' },
        { key: 'status', label: 'Status', type: 'select', options: ['Pending','Processing','Ready to Ship'] },
    ],
    shippedOrders: [
        { key: 'customer', label: 'Customer' },
        { key: 'items', label: 'Items' },
        { key: 'amount', label: 'Amount', type: 'number' },
        { key: 'date', label: 'Ship Date', type: 'date' },
        { key: 'trackingNo', label: 'Tracking No.' },
        { key: 'status', label: 'Status', type: 'select', options: ['In Transit','Delivered','Returned'] },
    ],
    payments: [
        { key: 'invoice', label: 'Invoice #', required: true },
        { key: 'client', label: 'Client', required: true },
        { key: 'amount', label: 'Amount', type: 'number', required: true },
        { key: 'date', label: 'Payment Date', type: 'date' },
        { key: 'method', label: 'Method', type: 'select', options: ['Bank Transfer','Cheque','Cash','Card','Online'] },
        { key: 'status', label: 'Status', type: 'select', options: ['Paid','Refunded'] },
    ],
};

// ==========================================
// Generic CRUD helpers
// ==========================================
function crudCreate(collection, label, fields, idType) {
    const formHtml = '<form id="crudForm">' + buildForm(fields) + '</form>';
    openModal('Create ' + label, formHtml, '<button class="btn btn-primary" id="crudSubmit">Create</button><button class="btn btn-secondary" onclick="closeModal()">Cancel</button>');
    document.getElementById('crudSubmit').addEventListener('click', () => {
        const data = getFormData(document.getElementById('crudForm'));
        const requiredFields = fields.filter(f => f.required);
        for (const f of requiredFields) {
            if (!data[f.key] || !data[f.key].trim()) { showToast(f.label + ' is required', 'error'); return; }
        }
        if (idType === 'string') {
            const prefix = collection === 'invoices' ? 'INV' : collection === 'payments' ? 'PAY' : 'ORD';
            data.id = nextStringId(prefix, AppData[collection]);
        } else {
            data.id = nextId(AppData[collection]);
        }
        if (data.amount) data.amount = parseFloat(data.amount) || 0;
        if (data.revenue) data.revenue = parseFloat(data.revenue) || 0;
        if (data.budget) data.budget = parseFloat(data.budget) || 0;
        if (data.leads) data.leads = parseInt(data.leads) || 0;
        AppData[collection].push(data);
        saveData();
        logActivity('Created ' + label + ': ' + (data.name || data.subject || data.title || data.client || data.contact || data.id), 'create');
        closeModal();
        showToast(label + ' created successfully!', 'success');
        renderPage(currentPage);
    });
}

function crudEdit(collection, label, fields, id, idType) {
    const item = AppData[collection].find(i => String(i.id) === String(id));
    if (!item) return;
    const formHtml = '<form id="crudForm">' + buildForm(fields, item) + '</form>';
    openModal('Edit ' + label, formHtml, '<button class="btn btn-primary" id="crudSubmit">Save Changes</button><button class="btn btn-secondary" onclick="closeModal()">Cancel</button>');
    document.getElementById('crudSubmit').addEventListener('click', () => {
        const data = getFormData(document.getElementById('crudForm'));
        const requiredFields = fields.filter(f => f.required);
        for (const f of requiredFields) {
            if (!data[f.key] || !data[f.key].trim()) { showToast(f.label + ' is required', 'error'); return; }
        }
        if (data.amount) data.amount = parseFloat(data.amount) || 0;
        if (data.revenue) data.revenue = parseFloat(data.revenue) || 0;
        if (data.budget) data.budget = parseFloat(data.budget) || 0;
        if (data.leads) data.leads = parseInt(data.leads) || 0;
        Object.assign(item, data);
        saveData();
        logActivity('Updated ' + label + ': ' + (item.name || item.subject || item.title || item.client || item.contact || item.id), 'update');
        closeModal();
        showToast(label + ' updated successfully!', 'success');
        renderPage(currentPage);
    });
}

function crudView(label, fields, data) {
    openModal(label + ' Details', buildDetail(fields, data), '<button class="btn btn-secondary" onclick="closeModal()">Close</button>');
}

function crudDelete(collection, label, id) {
    const item = AppData[collection].find(i => String(i.id) === String(id));
    const itemName = item ? (item.name || item.subject || item.title || item.client || item.contact || item.id) : '';
    openDeleteModal('Are you sure you want to delete "' + itemName + '"?', () => {
        AppData[collection] = AppData[collection].filter(i => String(i.id) !== String(id));
        saveData();
        logActivity('Deleted ' + label + ': ' + itemName, 'delete');
        showToast(label + ' deleted successfully!', 'success');
        renderPage(currentPage);
    });
}

// ==========================================
// Generic table builder with sort/filter/search
// ==========================================
function filterAndSort(data, columns) {
    let filtered = [...data];
    if (tableState.search) {
        filtered = filtered.filter(item => {
            return Object.values(item).some(v => String(v).toLowerCase().includes(tableState.search));
        });
    }
    if (tableState.filter && tableState.filter !== 'all') {
        filtered = filtered.filter(item => {
            return Object.values(item).some(v => String(v).toLowerCase() === tableState.filter);
        });
    }
    if (tableState.sortCol !== null && columns[tableState.sortCol]) {
        const key = columns[tableState.sortCol].key;
        filtered.sort((a, b) => {
            let va = a[key], vb = b[key];
            if (typeof va === 'number' && typeof vb === 'number') return tableState.sortDir === 'asc' ? va - vb : vb - va;
            va = String(va || '').toLowerCase(); vb = String(vb || '').toLowerCase();
            if (va < vb) return tableState.sortDir === 'asc' ? -1 : 1;
            if (va > vb) return tableState.sortDir === 'asc' ? 1 : -1;
            return 0;
        });
    }
    return filtered;
}

function buildTableHeader(columns) {
    return columns.map((col, i) => {
        const sortIcon = tableState.sortCol === i ? (tableState.sortDir === 'asc' ? ' \u25B2' : ' \u25BC') : '';
        return '<th onclick="sortTable(' + i + ')" style="cursor:pointer">' + col.label + '<span class="sort-icon">' + sortIcon + '</span></th>';
    }).join('') + '<th>Actions</th>';
}


// ==========================================
// DASHBOARD PAGE
// ==========================================
function renderDashboard() {
    const totalDeals = AppData.deals.length;
    const wonDeals = AppData.deals.filter(d => d.stage === 'Won').length;
    const totalRevenue = AppData.deals.filter(d => d.stage === 'Won').reduce((s, d) => s + (parseFloat(d.amount) || 0), 0);
    const pendingTasks = AppData.tasks.filter(t => t.status === 'Pending').length;
    const totalLeads = AppData.leads.length;
    const totalContacts = AppData.contacts.length;
    const totalAccounts = AppData.accounts.length;
    const scheduledMeetings = AppData.meetings.filter(m => m.status === 'Scheduled').length;

    const paidInvoices = AppData.invoices.filter(i => i.status === 'Paid').reduce((s, i) => s + (parseFloat(i.amount) || 0), 0);
    const pendingInvoices = AppData.invoices.filter(i => i.status === 'Pending' || i.status === 'Overdue').reduce((s, i) => s + (parseFloat(i.amount) || 0), 0);
    const totalExpenses = AppData.expenses.reduce((s, e) => s + (parseFloat(e.amount) || 0), 0);

    // Build activity from log or recent data
    let activityHtml = '';
    if (AppData.activityLog && AppData.activityLog.length > 0) {
        activityHtml = AppData.activityLog.slice(0, 8).map(a => {
            const ago = timeAgo(a.time);
            return '<li class="activity-item"><span class="activity-dot ' + (a.color || 'blue') + '"></span><div><div class="activity-text">' + a.text + '</div><div class="activity-time">' + ago + '</div></div></li>';
        }).join('');
    } else {
        activityHtml = '<li class="activity-item"><span class="activity-dot blue"></span><div><div class="activity-text">Welcome to Green Growth CRM</div><div class="activity-time">Just now</div></div></li>';
    }

    // Deal stage breakdown for chart
    const stages = ['New','Qualification','Proposal','Negotiation','Won','Lost'];
    const stageColors = ['#2196f3','#9c27b0','#ff9800','#f57c00','#4caf50','#f44336'];
    const maxStageCount = Math.max(...stages.map(s => AppData.deals.filter(d => d.stage === s).length), 1);
    const chartBars = stages.map((s, i) => {
        const count = AppData.deals.filter(d => d.stage === s).length;
        const pct = Math.round((count / maxStageCount) * 100);
        return '<div style="display:flex;align-items:center;gap:10px;margin-bottom:8px"><span style="width:90px;font-size:12px;color:#6c757d">' + s + '</span><div style="flex:1;background:#f1f3f5;border-radius:4px;height:24px;overflow:hidden"><div style="width:' + pct + '%;background:' + stageColors[i] + ';height:100%;border-radius:4px;display:flex;align-items:center;padding-left:8px;color:white;font-size:12px;font-weight:600;min-width:30px">' + count + '</div></div></div>';
    }).join('');

    return '<div class="page-header"><h1 class="page-title">Dashboard</h1></div>' +
        '<div class="stat-cards">' +
        '<div class="stat-card green"><div class="stat-info"><h4>Total Deals</h4><div class="stat-number">' + totalDeals + '</div></div><div class="stat-icon"><i class="fa-solid fa-handshake"></i></div></div>' +
        '<div class="stat-card purple"><div class="stat-info"><h4>Won Deals</h4><div class="stat-number">' + wonDeals + '</div></div><div class="stat-icon"><i class="fa-solid fa-trophy"></i></div></div>' +
        '<div class="stat-card pink"><div class="stat-info"><h4>Total Revenue</h4><div class="stat-number">AED ' + totalRevenue.toLocaleString() + '</div></div><div class="stat-icon"><i class="fa-solid fa-coins"></i></div></div>' +
        '<div class="stat-card orange"><div class="stat-info"><h4>Pending Tasks</h4><div class="stat-number">' + pendingTasks + '</div></div><div class="stat-icon"><i class="fa-solid fa-clock"></i></div></div>' +
        '</div>' +
        '<div class="dashboard-grid">' +
        '<div class="dashboard-card"><h3>Sales Overview</h3><div class="mini-stat-grid">' +
        '<div class="mini-stat"><div class="value">' + totalLeads + '</div><div class="label">Total Leads</div></div>' +
        '<div class="mini-stat"><div class="value">' + totalContacts + '</div><div class="label">Contacts</div></div>' +
        '<div class="mini-stat"><div class="value">' + totalAccounts + '</div><div class="label">Accounts</div></div>' +
        '<div class="mini-stat"><div class="value">' + scheduledMeetings + '</div><div class="label">Meetings</div></div>' +
        '</div></div>' +
        '<div class="dashboard-card"><h3>Deal Pipeline</h3>' + chartBars + '</div>' +
        '<div class="dashboard-card"><h3>Recent Activities</h3><ul class="activity-list">' + activityHtml + '</ul></div>' +
        '<div class="dashboard-card"><h3>Financial Summary</h3><div class="mini-stat-grid">' +
        '<div class="mini-stat"><div class="value" style="color:#4caf50">AED ' + paidInvoices.toLocaleString() + '</div><div class="label">Paid Invoices</div></div>' +
        '<div class="mini-stat"><div class="value" style="color:#ff9800">AED ' + pendingInvoices.toLocaleString() + '</div><div class="label">Outstanding</div></div>' +
        '<div class="mini-stat"><div class="value" style="color:#e91e63">AED ' + totalExpenses.toLocaleString() + '</div><div class="label">Expenses</div></div>' +
        '<div class="mini-stat"><div class="value" style="color:#1a5c2e">AED ' + (paidInvoices - totalExpenses).toLocaleString() + '</div><div class="label">Net Profit</div></div>' +
        '</div></div>' +
        '<div class="dashboard-card"><h3>Upcoming Tasks</h3><ul class="activity-list">' +
        AppData.tasks.filter(t => t.status === 'Pending').slice(0, 5).map(t =>
            '<li class="activity-item"><span class="activity-dot ' + (t.priority === 'High' ? 'red' : t.priority === 'Medium' ? 'orange' : 'blue') + '"></span><div><div class="activity-text">' + t.subject + '</div><div class="activity-time">Due: ' + t.dueDate + '</div></div></li>'
        ).join('') +
        '</ul></div>' +
        '</div>';
}

function timeAgo(dateStr) {
    const diff = Date.now() - new Date(dateStr).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return 'Just now';
    if (mins < 60) return mins + ' min ago';
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return hrs + ' hour' + (hrs > 1 ? 's' : '') + ' ago';
    const days = Math.floor(hrs / 24);
    return days + ' day' + (days > 1 ? 's' : '') + ' ago';
}

// ==========================================
// DEALS PAGE
// ==========================================
function renderDeals() {
    const cols = [
        { key: 'owner', label: 'Deal Owner' },
        { key: 'name', label: 'Deal Name' },
        { key: 'account', label: 'Account' },
        { key: 'amount', label: 'Amount' },
        { key: 'stage', label: 'Stage' },
        { key: 'date', label: 'Closing Date' },
    ];
    const data = filterAndSort(AppData.deals, cols);
    const pg = paginate(data);

    const newLeads = AppData.deals.filter(d => d.stage === 'New').length;
    const quoteSent = AppData.deals.filter(d => ['Qualification','Proposal','Negotiation'].includes(d.stage)).length;
    const wonLeads = AppData.deals.filter(d => d.stage === 'Won').length;
    const lostLeads = AppData.deals.filter(d => d.stage === 'Lost').length;

    let rows = pg.items.map(d =>
        '<tr><td>' + d.owner + '</td><td>' + d.name + '</td><td>' + d.account + '</td><td>AED ' + Number(d.amount).toLocaleString() + '</td><td><span class="status-badge ' + d.stage.toLowerCase() + '">' + d.stage + '</span></td><td>' + d.date + '</td><td><div class="action-btns">' +
        '<button class="action-btn view" onclick="crudView(\'Deal\',FIELDS.deals,' + JSON.stringify(d).replace(/'/g, "\\'").replace(/"/g, '&quot;') + ')"><i class="fa-solid fa-eye"></i></button>' +
        '<button class="action-btn edit" onclick="crudEdit(\'deals\',\'Deal\',FIELDS.deals,' + d.id + ')"><i class="fa-solid fa-pen"></i></button>' +
        '<button class="action-btn delete" onclick="crudDelete(\'deals\',\'Deal\',' + d.id + ')"><i class="fa-solid fa-trash"></i></button>' +
        '</div></td></tr>'
    ).join('');

    return '<div class="page-header"><h1 class="page-title">DEALS</h1><button class="btn btn-primary" onclick="crudCreate(\'deals\',\'Deal\',FIELDS.deals)">Create Deal</button></div>' +
        '<div class="stat-cards">' +
        '<div class="stat-card green"><div class="stat-info"><h4>New Leads</h4><div class="stat-number">' + newLeads + '</div></div><div class="stat-icon"><i class="fa-solid fa-cart-shopping"></i></div></div>' +
        '<div class="stat-card purple"><div class="stat-info"><h4>Quote Sent</h4><div class="stat-number">' + quoteSent + '</div></div><div class="stat-icon"><i class="fa-solid fa-dollar-sign"></i></div></div>' +
        '<div class="stat-card pink"><div class="stat-info"><h4>Won Leads</h4><div class="stat-number">' + wonLeads + '</div></div><div class="stat-icon"><i class="fa-solid fa-user-group"></i></div></div>' +
        '<div class="stat-card orange"><div class="stat-info"><h4>Lost Leads</h4><div class="stat-number">' + lostLeads + '</div></div><div class="stat-icon"><i class="fa-brands fa-bitcoin"></i></div></div>' +
        '</div>' +
        '<div class="table-toolbar"><div class="toolbar-actions">' +
        '<button class="btn btn-sm btn-outline" onclick="exportTable(\'copy\')">Copy</button>' +
        '<button class="btn btn-sm btn-outline" onclick="exportTable(\'excel\')">Excel</button>' +
        '<button class="btn btn-sm btn-outline" onclick="exportTable(\'pdf\')">PDF</button>' +
        '</div></div>' +
        '<div class="table-toolbar"><div class="toolbar-filter">' +
        '<select class="filter-select" id="positionFilter"><option value="all">All Stages</option><option value="new">New</option><option value="qualification">Qualification</option><option value="proposal">Proposal</option><option value="negotiation">Negotiation</option><option value="won">Won</option><option value="lost">Lost</option></select>' +
        '</div><div class="table-search"><label>Search:</label><input type="text" id="tableSearch"></div></div>' +
        '<div class="data-table-wrapper"><table class="data-table"><thead><tr>' + buildTableHeader(cols) + '</tr></thead><tbody>' + rows + '</tbody></table></div>' +
        renderPagination(pg);
}

// ==========================================
// LEADS PAGE
// ==========================================
function renderLeads() {
    const cols = [
        { key: 'name', label: 'Name' }, { key: 'company', label: 'Company' }, { key: 'email', label: 'Email' },
        { key: 'phone', label: 'Phone' }, { key: 'source', label: 'Source' }, { key: 'status', label: 'Status' },
    ];
    const data = filterAndSort(AppData.leads, cols);
    const pg = paginate(data);
    let rows = pg.items.map(l =>
        '<tr><td>' + l.name + '</td><td>' + l.company + '</td><td>' + l.email + '</td><td>' + l.phone + '</td><td>' + l.source + '</td><td><span class="status-badge ' + l.status.toLowerCase() + '">' + l.status + '</span></td><td><div class="action-btns">' +
        '<button class="action-btn view" onclick="crudView(\'Lead\',FIELDS.leads,AppData.leads.find(x=>x.id===' + l.id + '))"><i class="fa-solid fa-eye"></i></button>' +
        '<button class="action-btn edit" onclick="crudEdit(\'leads\',\'Lead\',FIELDS.leads,' + l.id + ')"><i class="fa-solid fa-pen"></i></button>' +
        '<button class="action-btn delete" onclick="crudDelete(\'leads\',\'Lead\',' + l.id + ')"><i class="fa-solid fa-trash"></i></button>' +
        '</div></td></tr>'
    ).join('');

    return '<div class="page-header"><h1 class="page-title">LEADS</h1><button class="btn btn-primary" onclick="crudCreate(\'leads\',\'Lead\',FIELDS.leads)">Create Lead</button></div>' +
        '<div class="stat-cards">' +
        '<div class="stat-card green"><div class="stat-info"><h4>Total Leads</h4><div class="stat-number">' + AppData.leads.length + '</div></div><div class="stat-icon"><i class="fa-solid fa-users"></i></div></div>' +
        '<div class="stat-card purple"><div class="stat-info"><h4>Qualified</h4><div class="stat-number">' + AppData.leads.filter(l => l.status === 'Qualified').length + '</div></div><div class="stat-icon"><i class="fa-solid fa-user-check"></i></div></div>' +
        '<div class="stat-card pink"><div class="stat-info"><h4>Won</h4><div class="stat-number">' + AppData.leads.filter(l => l.status === 'Won').length + '</div></div><div class="stat-icon"><i class="fa-solid fa-trophy"></i></div></div>' +
        '<div class="stat-card orange"><div class="stat-info"><h4>Lost</h4><div class="stat-number">' + AppData.leads.filter(l => l.status === 'Lost').length + '</div></div><div class="stat-icon"><i class="fa-solid fa-user-xmark"></i></div></div>' +
        '</div>' +
        '<div class="table-toolbar"><div class="toolbar-actions"><button class="btn btn-sm btn-outline" onclick="exportTable(\'copy\')">Copy</button><button class="btn btn-sm btn-outline" onclick="exportTable(\'excel\')">Excel</button><button class="btn btn-sm btn-outline" onclick="exportTable(\'pdf\')">PDF</button></div><div class="table-search" style="margin-left:auto"><label>Search:</label><input type="text" id="tableSearch"></div></div>' +
        '<div class="data-table-wrapper"><table class="data-table"><thead><tr>' + buildTableHeader(cols) + '</tr></thead><tbody>' + rows + '</tbody></table></div>' +
        renderPagination(pg);
}

// ==========================================
// CONTACTS PAGE
// ==========================================
function renderContacts() {
    const cols = [
        { key: 'name', label: 'Name' }, { key: 'email', label: 'Email' }, { key: 'phone', label: 'Phone' },
        { key: 'company', label: 'Company' }, { key: 'position', label: 'Position' }, { key: 'status', label: 'Status' },
    ];
    const data = filterAndSort(AppData.contacts, cols);
    const pg = paginate(data);
    let rows = pg.items.map(c =>
        '<tr><td>' + c.name + '</td><td>' + c.email + '</td><td>' + c.phone + '</td><td>' + c.company + '</td><td>' + c.position + '</td><td><span class="status-badge ' + c.status.toLowerCase() + '">' + c.status + '</span></td><td><div class="action-btns">' +
        '<button class="action-btn view" onclick="crudView(\'Contact\',FIELDS.contacts,AppData.contacts.find(x=>x.id===' + c.id + '))"><i class="fa-solid fa-eye"></i></button>' +
        '<button class="action-btn edit" onclick="crudEdit(\'contacts\',\'Contact\',FIELDS.contacts,' + c.id + ')"><i class="fa-solid fa-pen"></i></button>' +
        '<button class="action-btn delete" onclick="crudDelete(\'contacts\',\'Contact\',' + c.id + ')"><i class="fa-solid fa-trash"></i></button>' +
        '</div></td></tr>'
    ).join('');

    return '<div class="page-header"><h1 class="page-title">CONTACTS</h1><button class="btn btn-primary" onclick="crudCreate(\'contacts\',\'Contact\',FIELDS.contacts)">Create Contact</button></div>' +
        '<div class="table-toolbar"><div class="toolbar-actions"><button class="btn btn-sm btn-outline" onclick="exportTable(\'copy\')">Copy</button><button class="btn btn-sm btn-outline" onclick="exportTable(\'excel\')">Excel</button><button class="btn btn-sm btn-outline" onclick="exportTable(\'pdf\')">PDF</button></div><div class="table-search" style="margin-left:auto"><label>Search:</label><input type="text" id="tableSearch"></div></div>' +
        '<div class="data-table-wrapper"><table class="data-table"><thead><tr>' + buildTableHeader(cols) + '</tr></thead><tbody>' + rows + '</tbody></table></div>' +
        renderPagination(pg);
}

// ==========================================
// ACCOUNTS PAGE
// ==========================================
function renderAccounts() {
    const cols = [
        { key: 'name', label: 'Account Name' }, { key: 'industry', label: 'Industry' }, { key: 'phone', label: 'Phone' },
        { key: 'website', label: 'Website' }, { key: 'owner', label: 'Owner' }, { key: 'revenue', label: 'Revenue' }, { key: 'status', label: 'Status' },
    ];
    const data = filterAndSort(AppData.accounts, cols);
    const pg = paginate(data);
    let rows = pg.items.map(a =>
        '<tr><td>' + a.name + '</td><td>' + a.industry + '</td><td>' + a.phone + '</td><td>' + a.website + '</td><td>' + a.owner + '</td><td>AED ' + Number(a.revenue).toLocaleString() + '</td><td><span class="status-badge ' + a.status.toLowerCase() + '">' + a.status + '</span></td><td><div class="action-btns">' +
        '<button class="action-btn view" onclick="crudView(\'Account\',FIELDS.accounts,AppData.accounts.find(x=>x.id===' + a.id + '))"><i class="fa-solid fa-eye"></i></button>' +
        '<button class="action-btn edit" onclick="crudEdit(\'accounts\',\'Account\',FIELDS.accounts,' + a.id + ')"><i class="fa-solid fa-pen"></i></button>' +
        '<button class="action-btn delete" onclick="crudDelete(\'accounts\',\'Account\',' + a.id + ')"><i class="fa-solid fa-trash"></i></button>' +
        '</div></td></tr>'
    ).join('');

    return '<div class="page-header"><h1 class="page-title">ACCOUNTS</h1><button class="btn btn-primary" onclick="crudCreate(\'accounts\',\'Account\',FIELDS.accounts)">Create Account</button></div>' +
        '<div class="table-toolbar"><div class="toolbar-actions"><button class="btn btn-sm btn-outline" onclick="exportTable(\'copy\')">Copy</button><button class="btn btn-sm btn-outline" onclick="exportTable(\'excel\')">Excel</button><button class="btn btn-sm btn-outline" onclick="exportTable(\'pdf\')">PDF</button></div><div class="table-search" style="margin-left:auto"><label>Search:</label><input type="text" id="tableSearch"></div></div>' +
        '<div class="data-table-wrapper"><table class="data-table"><thead><tr>' + buildTableHeader(cols) + '</tr></thead><tbody>' + rows + '</tbody></table></div>' +
        renderPagination(pg);
}


// ==========================================
// FORECAST PAGE
// ==========================================
function renderForecast() {
    const totalPipeline = AppData.deals.reduce((s, d) => s + (parseFloat(d.amount) || 0), 0);
    const wonAmount = AppData.deals.filter(d => d.stage === 'Won').reduce((s, d) => s + (parseFloat(d.amount) || 0), 0);
    const openAmount = AppData.deals.filter(d => !['Won','Lost'].includes(d.stage)).reduce((s, d) => s + (parseFloat(d.amount) || 0), 0);
    const lostAmount = AppData.deals.filter(d => d.stage === 'Lost').reduce((s, d) => s + (parseFloat(d.amount) || 0), 0);
    const winRate = AppData.deals.length > 0 ? Math.round((AppData.deals.filter(d => d.stage === 'Won').length / AppData.deals.length) * 100) : 0;

    const stages = ['New','Qualification','Proposal','Negotiation','Won','Lost'];
    const stageColors = ['#2196f3','#9c27b0','#ff9800','#f57c00','#4caf50','#f44336'];
    const forecastBars = stages.map((s, i) => {
        const amt = AppData.deals.filter(d => d.stage === s).reduce((sum, d) => sum + (parseFloat(d.amount) || 0), 0);
        const count = AppData.deals.filter(d => d.stage === s).length;
        const pct = totalPipeline > 0 ? Math.round((amt / totalPipeline) * 100) : 0;
        return '<div style="display:flex;align-items:center;gap:10px;margin-bottom:12px"><span style="width:100px;font-size:13px;font-weight:600;color:#495057">' + s + '</span><div style="flex:1;background:#f1f3f5;border-radius:4px;height:30px;overflow:hidden"><div style="width:' + Math.max(pct, 2) + '%;background:' + stageColors[i] + ';height:100%;border-radius:4px;display:flex;align-items:center;padding-left:10px;color:white;font-size:12px;font-weight:600">AED ' + amt.toLocaleString() + '</div></div><span style="width:60px;text-align:right;font-size:12px;color:#6c757d">' + count + ' deals</span></div>';
    }).join('');

    return '<div class="page-header"><h1 class="page-title">FORECAST</h1></div>' +
        '<div class="stat-cards">' +
        '<div class="stat-card green"><div class="stat-info"><h4>Total Pipeline</h4><div class="stat-number">AED ' + totalPipeline.toLocaleString() + '</div></div><div class="stat-icon"><i class="fa-solid fa-chart-pie"></i></div></div>' +
        '<div class="stat-card purple"><div class="stat-info"><h4>Won Revenue</h4><div class="stat-number">AED ' + wonAmount.toLocaleString() + '</div></div><div class="stat-icon"><i class="fa-solid fa-sack-dollar"></i></div></div>' +
        '<div class="stat-card orange"><div class="stat-info"><h4>Open Pipeline</h4><div class="stat-number">AED ' + openAmount.toLocaleString() + '</div></div><div class="stat-icon"><i class="fa-solid fa-hourglass-half"></i></div></div>' +
        '<div class="stat-card pink"><div class="stat-info"><h4>Win Rate</h4><div class="stat-number">' + winRate + '%</div></div><div class="stat-icon"><i class="fa-solid fa-percent"></i></div></div>' +
        '</div>' +
        '<div class="dashboard-card"><h3>Pipeline by Stage</h3>' + forecastBars + '</div>';
}

// ==========================================
// CAMPAIGN PAGE
// ==========================================
function renderCampaign() {
    const cols = [
        { key: 'name', label: 'Campaign Name' }, { key: 'type', label: 'Type' }, { key: 'status', label: 'Status' },
        { key: 'startDate', label: 'Start Date' }, { key: 'budget', label: 'Budget' }, { key: 'leads', label: 'Leads' },
    ];
    const data = filterAndSort(AppData.campaigns, cols);
    const pg = paginate(data);
    const activeCampaigns = AppData.campaigns.filter(c => c.status === 'Active').length;
    const totalBudget = AppData.campaigns.reduce((s, c) => s + (parseFloat(c.budget) || 0), 0);
    const totalCampaignLeads = AppData.campaigns.reduce((s, c) => s + (parseInt(c.leads) || 0), 0);

    let rows = pg.items.map(c =>
        '<tr><td>' + c.name + '</td><td>' + c.type + '</td><td><span class="status-badge ' + (c.status === 'Active' ? 'active' : c.status === 'Planned' ? 'pending' : 'completed') + '">' + c.status + '</span></td><td>' + c.startDate + '</td><td>AED ' + Number(c.budget).toLocaleString() + '</td><td>' + c.leads + '</td><td><div class="action-btns">' +
        '<button class="action-btn view" onclick="crudView(\'Campaign\',FIELDS.campaigns,AppData.campaigns.find(x=>x.id===' + c.id + '))"><i class="fa-solid fa-eye"></i></button>' +
        '<button class="action-btn edit" onclick="crudEdit(\'campaigns\',\'Campaign\',FIELDS.campaigns,' + c.id + ')"><i class="fa-solid fa-pen"></i></button>' +
        '<button class="action-btn delete" onclick="crudDelete(\'campaigns\',\'Campaign\',' + c.id + ')"><i class="fa-solid fa-trash"></i></button>' +
        '</div></td></tr>'
    ).join('');

    return '<div class="page-header"><h1 class="page-title">CAMPAIGNS</h1><button class="btn btn-primary" onclick="crudCreate(\'campaigns\',\'Campaign\',FIELDS.campaigns)">Create Campaign</button></div>' +
        '<div class="stat-cards">' +
        '<div class="stat-card green"><div class="stat-info"><h4>Active Campaigns</h4><div class="stat-number">' + activeCampaigns + '</div></div><div class="stat-icon"><i class="fa-solid fa-bullhorn"></i></div></div>' +
        '<div class="stat-card purple"><div class="stat-info"><h4>Total Budget</h4><div class="stat-number">AED ' + totalBudget.toLocaleString() + '</div></div><div class="stat-icon"><i class="fa-solid fa-wallet"></i></div></div>' +
        '<div class="stat-card pink"><div class="stat-info"><h4>Total Leads</h4><div class="stat-number">' + totalCampaignLeads + '</div></div><div class="stat-icon"><i class="fa-solid fa-arrow-trend-up"></i></div></div>' +
        '</div>' +
        '<div class="table-toolbar"><div class="toolbar-actions"><button class="btn btn-sm btn-outline" onclick="exportTable(\'copy\')">Copy</button><button class="btn btn-sm btn-outline" onclick="exportTable(\'excel\')">Excel</button><button class="btn btn-sm btn-outline" onclick="exportTable(\'pdf\')">PDF</button></div><div class="table-search" style="margin-left:auto"><label>Search:</label><input type="text" id="tableSearch"></div></div>' +
        '<div class="data-table-wrapper"><table class="data-table"><thead><tr>' + buildTableHeader(cols) + '</tr></thead><tbody>' + rows + '</tbody></table></div>' +
        renderPagination(pg);
}

// ==========================================
// TASKS PAGE
// ==========================================
function renderTasks() {
    const cols = [
        { key: 'subject', label: 'Subject' }, { key: 'dueDate', label: 'Due Date' }, { key: 'priority', label: 'Priority' },
        { key: 'status', label: 'Status' }, { key: 'assignedTo', label: 'Assigned To' },
    ];
    const data = filterAndSort(AppData.tasks, cols);
    const pg = paginate(data);
    let rows = pg.items.map(t =>
        '<tr><td>' + t.subject + '</td><td>' + t.dueDate + '</td><td><span class="status-badge ' + (t.priority === 'High' ? 'lost' : t.priority === 'Medium' ? 'pending' : 'active') + '">' + t.priority + '</span></td><td><span class="status-badge ' + t.status.toLowerCase().replace(/ /g, '') + '">' + t.status + '</span></td><td>' + t.assignedTo + '</td><td><div class="action-btns">' +
        '<button class="action-btn view" onclick="crudView(\'Task\',FIELDS.tasks,AppData.tasks.find(x=>x.id===' + t.id + '))"><i class="fa-solid fa-eye"></i></button>' +
        '<button class="action-btn edit" onclick="crudEdit(\'tasks\',\'Task\',FIELDS.tasks,' + t.id + ')"><i class="fa-solid fa-pen"></i></button>' +
        '<button class="action-btn delete" onclick="crudDelete(\'tasks\',\'Task\',' + t.id + ')"><i class="fa-solid fa-trash"></i></button>' +
        '</div></td></tr>'
    ).join('');

    return '<div class="page-header"><h1 class="page-title">TASKS</h1><button class="btn btn-primary" onclick="crudCreate(\'tasks\',\'Task\',FIELDS.tasks)">Create Task</button></div>' +
        '<div class="table-toolbar"><div class="toolbar-actions"><button class="btn btn-sm btn-outline" onclick="exportTable(\'copy\')">Copy</button><button class="btn btn-sm btn-outline" onclick="exportTable(\'excel\')">Excel</button><button class="btn btn-sm btn-outline" onclick="exportTable(\'pdf\')">PDF</button></div><div class="table-search" style="margin-left:auto"><label>Search:</label><input type="text" id="tableSearch"></div></div>' +
        '<div class="data-table-wrapper"><table class="data-table"><thead><tr>' + buildTableHeader(cols) + '</tr></thead><tbody>' + rows + '</tbody></table></div>' +
        renderPagination(pg);
}

// ==========================================
// MEETINGS PAGE
// ==========================================
function renderMeetings() {
    const cols = [
        { key: 'title', label: 'Title' }, { key: 'date', label: 'Date' }, { key: 'time', label: 'Time' },
        { key: 'location', label: 'Location' }, { key: 'attendees', label: 'Attendees' }, { key: 'status', label: 'Status' },
    ];
    const data = filterAndSort(AppData.meetings, cols);
    const pg = paginate(data);
    let rows = pg.items.map(m =>
        '<tr><td>' + m.title + '</td><td>' + m.date + '</td><td>' + m.time + '</td><td>' + m.location + '</td><td>' + m.attendees + '</td><td><span class="status-badge ' + (m.status === 'Scheduled' ? 'pending' : m.status === 'Completed' ? 'completed' : 'cancelled') + '">' + m.status + '</span></td><td><div class="action-btns">' +
        '<button class="action-btn view" onclick="crudView(\'Meeting\',FIELDS.meetings,AppData.meetings.find(x=>x.id===' + m.id + '))"><i class="fa-solid fa-eye"></i></button>' +
        '<button class="action-btn edit" onclick="crudEdit(\'meetings\',\'Meeting\',FIELDS.meetings,' + m.id + ')"><i class="fa-solid fa-pen"></i></button>' +
        '<button class="action-btn delete" onclick="crudDelete(\'meetings\',\'Meeting\',' + m.id + ')"><i class="fa-solid fa-trash"></i></button>' +
        '</div></td></tr>'
    ).join('');

    return '<div class="page-header"><h1 class="page-title">MEETINGS</h1><button class="btn btn-primary" onclick="crudCreate(\'meetings\',\'Meeting\',FIELDS.meetings)">Schedule Meeting</button></div>' +
        '<div class="table-toolbar"><div class="toolbar-actions"><button class="btn btn-sm btn-outline" onclick="exportTable(\'copy\')">Copy</button><button class="btn btn-sm btn-outline" onclick="exportTable(\'excel\')">Excel</button><button class="btn btn-sm btn-outline" onclick="exportTable(\'pdf\')">PDF</button></div><div class="table-search" style="margin-left:auto"><label>Search:</label><input type="text" id="tableSearch"></div></div>' +
        '<div class="data-table-wrapper"><table class="data-table"><thead><tr>' + buildTableHeader(cols) + '</tr></thead><tbody>' + rows + '</tbody></table></div>' +
        renderPagination(pg);
}

// ==========================================
// CALLS PAGE
// ==========================================
function renderCalls() {
    const cols = [
        { key: 'contact', label: 'Contact' }, { key: 'date', label: 'Date' }, { key: 'time', label: 'Time' },
        { key: 'duration', label: 'Duration' }, { key: 'type', label: 'Type' }, { key: 'status', label: 'Status' },
    ];
    const data = filterAndSort(AppData.calls, cols);
    const pg = paginate(data);
    let rows = pg.items.map(c =>
        '<tr><td>' + c.contact + '</td><td>' + c.date + '</td><td>' + c.time + '</td><td>' + (c.duration ? c.duration + ' min' : '\u2014') + '</td><td>' + c.type + '</td><td><span class="status-badge ' + c.status.toLowerCase() + '">' + c.status + '</span></td><td><div class="action-btns">' +
        '<button class="action-btn view" onclick="crudView(\'Call\',FIELDS.calls,AppData.calls.find(x=>x.id===' + c.id + '))"><i class="fa-solid fa-eye"></i></button>' +
        '<button class="action-btn edit" onclick="crudEdit(\'calls\',\'Call\',FIELDS.calls,' + c.id + ')"><i class="fa-solid fa-pen"></i></button>' +
        '<button class="action-btn delete" onclick="crudDelete(\'calls\',\'Call\',' + c.id + ')"><i class="fa-solid fa-trash"></i></button>' +
        '</div></td></tr>'
    ).join('');

    return '<div class="page-header"><h1 class="page-title">CALLS</h1><button class="btn btn-primary" onclick="crudCreate(\'calls\',\'Call\',FIELDS.calls)">Log Call</button></div>' +
        '<div class="table-toolbar"><div class="toolbar-actions"><button class="btn btn-sm btn-outline" onclick="exportTable(\'copy\')">Copy</button><button class="btn btn-sm btn-outline" onclick="exportTable(\'excel\')">Excel</button><button class="btn btn-sm btn-outline" onclick="exportTable(\'pdf\')">PDF</button></div><div class="table-search" style="margin-left:auto"><label>Search:</label><input type="text" id="tableSearch"></div></div>' +
        '<div class="data-table-wrapper"><table class="data-table"><thead><tr>' + buildTableHeader(cols) + '</tr></thead><tbody>' + rows + '</tbody></table></div>' +
        renderPagination(pg);
}

// ==========================================
// ATTENDANCE PAGE
// ==========================================
function renderAttendance() {
    const present = AppData.attendance.filter(a => a.status === 'Present').length;
    const absent = AppData.attendance.filter(a => a.status === 'Absent').length;
    const late = AppData.attendance.filter(a => a.status === 'Late').length;
    const leave = AppData.attendance.filter(a => a.status === 'On Leave').length;

    const cols = [
        { key: 'employee', label: 'Employee' }, { key: 'date', label: 'Date' }, { key: 'checkIn', label: 'Check In' },
        { key: 'checkOut', label: 'Check Out' }, { key: 'hours', label: 'Hours' }, { key: 'status', label: 'Status' },
    ];
    const data = filterAndSort(AppData.attendance, cols);

    let rows = data.map(a =>
        '<tr><td>' + a.employee + '</td><td>' + a.date + '</td><td>' + (a.checkIn || '\u2014') + '</td><td>' + (a.checkOut || '\u2014') + '</td><td>' + (a.hours || '\u2014') + '</td><td><span class="status-badge ' + (a.status === 'Present' ? 'active' : a.status === 'Late' ? 'pending' : a.status === 'Absent' ? 'lost' : 'new') + '">' + a.status + '</span></td></tr>'
    ).join('');

    return '<div class="page-header"><h1 class="page-title">ATTENDANCE</h1></div>' +
        '<div class="attendance-grid">' +
        '<div class="attendance-card"><div class="att-value att-present">' + present + '</div><div class="att-label">Present</div></div>' +
        '<div class="attendance-card"><div class="att-value att-absent">' + absent + '</div><div class="att-label">Absent</div></div>' +
        '<div class="attendance-card"><div class="att-value att-late">' + late + '</div><div class="att-label">Late</div></div>' +
        '<div class="attendance-card"><div class="att-value att-leave">' + leave + '</div><div class="att-label">On Leave</div></div>' +
        '</div>' +
        '<div class="data-table-wrapper"><table class="data-table"><thead><tr><th>Employee</th><th>Date</th><th>Check In</th><th>Check Out</th><th>Hours</th><th>Status</th></tr></thead><tbody>' + rows + '</tbody></table></div>';
}


// ==========================================
// PENDING ORDERS PAGE
// ==========================================
function renderPendingOrders() {
    const cols = [
        { key: 'id', label: 'Order ID' }, { key: 'customer', label: 'Customer' }, { key: 'items', label: 'Items' },
        { key: 'amount', label: 'Amount' }, { key: 'date', label: 'Date' }, { key: 'status', label: 'Status' },
    ];
    const data = filterAndSort(AppData.pendingOrders, cols);
    const pg = paginate(data);
    let rows = pg.items.map(o =>
        '<tr><td>' + o.id + '</td><td>' + o.customer + '</td><td>' + o.items + '</td><td>AED ' + Number(o.amount).toLocaleString() + '</td><td>' + o.date + '</td><td><span class="status-badge pending">' + o.status + '</span></td><td><div class="action-btns">' +
        '<button class="action-btn view" onclick="crudView(\'Order\',FIELDS.pendingOrders,AppData.pendingOrders.find(x=>x.id===\'' + o.id + '\'))"><i class="fa-solid fa-eye"></i></button>' +
        '<button class="action-btn edit" onclick="crudEdit(\'pendingOrders\',\'Order\',FIELDS.pendingOrders,\'' + o.id + '\',\'string\')"><i class="fa-solid fa-pen"></i></button>' +
        '<button class="action-btn delete" onclick="crudDelete(\'pendingOrders\',\'Order\',\'' + o.id + '\')"><i class="fa-solid fa-trash"></i></button>' +
        '</div></td></tr>'
    ).join('');

    return '<div class="page-header"><h1 class="page-title">PENDING ORDERS</h1><button class="btn btn-primary" onclick="crudCreate(\'pendingOrders\',\'Order\',FIELDS.pendingOrders,\'string\')">Create Order</button></div>' +
        '<div class="table-toolbar"><div class="toolbar-actions"><button class="btn btn-sm btn-outline" onclick="exportTable(\'copy\')">Copy</button><button class="btn btn-sm btn-outline" onclick="exportTable(\'excel\')">Excel</button><button class="btn btn-sm btn-outline" onclick="exportTable(\'pdf\')">PDF</button></div><div class="table-search" style="margin-left:auto"><label>Search:</label><input type="text" id="tableSearch"></div></div>' +
        '<div class="data-table-wrapper"><table class="data-table"><thead><tr>' + buildTableHeader(cols) + '</tr></thead><tbody>' + rows + '</tbody></table></div>' +
        renderPagination(pg);
}

// ==========================================
// SHIPPED ORDERS PAGE
// ==========================================
function renderShippedOrders() {
    const cols = [
        { key: 'id', label: 'Order ID' }, { key: 'customer', label: 'Customer' }, { key: 'items', label: 'Items' },
        { key: 'amount', label: 'Amount' }, { key: 'date', label: 'Ship Date' }, { key: 'trackingNo', label: 'Tracking No.' }, { key: 'status', label: 'Status' },
    ];
    const data = filterAndSort(AppData.shippedOrders, cols);
    const pg = paginate(data);
    let rows = pg.items.map(o =>
        '<tr><td>' + o.id + '</td><td>' + o.customer + '</td><td>' + o.items + '</td><td>AED ' + Number(o.amount).toLocaleString() + '</td><td>' + o.date + '</td><td>' + o.trackingNo + '</td><td><span class="status-badge ' + (o.status === 'Delivered' ? 'completed' : 'shipped') + '">' + o.status + '</span></td><td><div class="action-btns">' +
        '<button class="action-btn view" onclick="crudView(\'Order\',FIELDS.shippedOrders,AppData.shippedOrders.find(x=>x.id===\'' + o.id + '\'))"><i class="fa-solid fa-eye"></i></button>' +
        '<button class="action-btn edit" onclick="crudEdit(\'shippedOrders\',\'Order\',FIELDS.shippedOrders,\'' + o.id + '\',\'string\')"><i class="fa-solid fa-pen"></i></button>' +
        '</div></td></tr>'
    ).join('');

    return '<div class="page-header"><h1 class="page-title">SHIPPED ORDERS</h1></div>' +
        '<div class="table-toolbar"><div class="toolbar-actions"><button class="btn btn-sm btn-outline" onclick="exportTable(\'copy\')">Copy</button><button class="btn btn-sm btn-outline" onclick="exportTable(\'excel\')">Excel</button><button class="btn btn-sm btn-outline" onclick="exportTable(\'pdf\')">PDF</button></div><div class="table-search" style="margin-left:auto"><label>Search:</label><input type="text" id="tableSearch"></div></div>' +
        '<div class="data-table-wrapper"><table class="data-table"><thead><tr>' + buildTableHeader(cols) + '</tr></thead><tbody>' + rows + '</tbody></table></div>' +
        renderPagination(pg);
}

// ==========================================
// INVOICES PAGE
// ==========================================
function renderInvoices() {
    const cols = [
        { key: 'id', label: 'Invoice #' }, { key: 'client', label: 'Client' }, { key: 'amount', label: 'Amount' },
        { key: 'date', label: 'Date' }, { key: 'dueDate', label: 'Due Date' }, { key: 'status', label: 'Status' },
    ];
    const data = filterAndSort(AppData.invoices, cols);
    const pg = paginate(data);
    const totalPending = AppData.invoices.filter(i => i.status === 'Pending').reduce((s, i) => s + (parseFloat(i.amount) || 0), 0);
    const totalPaid = AppData.invoices.filter(i => i.status === 'Paid').reduce((s, i) => s + (parseFloat(i.amount) || 0), 0);
    const totalOverdue = AppData.invoices.filter(i => i.status === 'Overdue').reduce((s, i) => s + (parseFloat(i.amount) || 0), 0);

    let rows = pg.items.map(inv =>
        '<tr><td>' + inv.id + '</td><td>' + inv.client + '</td><td>AED ' + Number(inv.amount).toLocaleString() + '</td><td>' + inv.date + '</td><td>' + inv.dueDate + '</td><td><span class="status-badge ' + inv.status.toLowerCase() + '">' + inv.status + '</span></td><td><div class="action-btns">' +
        '<button class="action-btn view" onclick="crudView(\'Invoice\',FIELDS.invoices,AppData.invoices.find(x=>x.id===\'' + inv.id + '\'))"><i class="fa-solid fa-eye"></i></button>' +
        '<button class="action-btn edit" onclick="crudEdit(\'invoices\',\'Invoice\',FIELDS.invoices,\'' + inv.id + '\',\'string\')"><i class="fa-solid fa-pen"></i></button>' +
        '<button class="action-btn delete" onclick="crudDelete(\'invoices\',\'Invoice\',\'' + inv.id + '\')"><i class="fa-solid fa-trash"></i></button>' +
        '</div></td></tr>'
    ).join('');

    return '<div class="page-header"><h1 class="page-title">INVOICES</h1><button class="btn btn-primary" onclick="crudCreate(\'invoices\',\'Invoice\',FIELDS.invoices,\'string\')">Create Invoice</button></div>' +
        '<div class="stat-cards">' +
        '<div class="stat-card green"><div class="stat-info"><h4>Paid</h4><div class="stat-number">AED ' + totalPaid.toLocaleString() + '</div></div><div class="stat-icon"><i class="fa-solid fa-circle-check"></i></div></div>' +
        '<div class="stat-card orange"><div class="stat-info"><h4>Pending</h4><div class="stat-number">AED ' + totalPending.toLocaleString() + '</div></div><div class="stat-icon"><i class="fa-solid fa-clock"></i></div></div>' +
        '<div class="stat-card pink"><div class="stat-info"><h4>Overdue</h4><div class="stat-number">AED ' + totalOverdue.toLocaleString() + '</div></div><div class="stat-icon"><i class="fa-solid fa-triangle-exclamation"></i></div></div>' +
        '</div>' +
        '<div class="table-toolbar"><div class="toolbar-actions"><button class="btn btn-sm btn-outline" onclick="exportTable(\'copy\')">Copy</button><button class="btn btn-sm btn-outline" onclick="exportTable(\'excel\')">Excel</button><button class="btn btn-sm btn-outline" onclick="exportTable(\'pdf\')">PDF</button></div><div class="table-search" style="margin-left:auto"><label>Search:</label><input type="text" id="tableSearch"></div></div>' +
        '<div class="data-table-wrapper"><table class="data-table"><thead><tr>' + buildTableHeader(cols) + '</tr></thead><tbody>' + rows + '</tbody></table></div>' +
        renderPagination(pg);
}

// ==========================================
// PAYMENTS PAGE
// ==========================================
function renderPayments() {
    const cols = [
        { key: 'id', label: 'Payment ID' }, { key: 'invoice', label: 'Invoice' }, { key: 'client', label: 'Client' },
        { key: 'amount', label: 'Amount' }, { key: 'date', label: 'Date' }, { key: 'method', label: 'Method' }, { key: 'status', label: 'Status' },
    ];
    const data = filterAndSort(AppData.payments, cols);
    const pg = paginate(data);
    const totalReceived = AppData.payments.filter(p => p.status === 'Paid').reduce((s, p) => s + (parseFloat(p.amount) || 0), 0);

    let rows = pg.items.map(p =>
        '<tr><td>' + p.id + '</td><td>' + p.invoice + '</td><td>' + p.client + '</td><td>AED ' + Number(p.amount).toLocaleString() + '</td><td>' + p.date + '</td><td>' + p.method + '</td><td><span class="status-badge paid">' + p.status + '</span></td><td><div class="action-btns">' +
        '<button class="action-btn view" onclick="crudView(\'Payment\',FIELDS.payments,AppData.payments.find(x=>x.id===\'' + p.id + '\'))"><i class="fa-solid fa-eye"></i></button>' +
        '<button class="action-btn edit" onclick="crudEdit(\'payments\',\'Payment\',FIELDS.payments,\'' + p.id + '\',\'string\')"><i class="fa-solid fa-pen"></i></button>' +
        '</div></td></tr>'
    ).join('');

    return '<div class="page-header"><h1 class="page-title">PAYMENTS</h1><button class="btn btn-primary" onclick="crudCreate(\'payments\',\'Payment\',FIELDS.payments,\'string\')">Record Payment</button></div>' +
        '<div class="stat-cards">' +
        '<div class="stat-card green"><div class="stat-info"><h4>Total Received</h4><div class="stat-number">AED ' + totalReceived.toLocaleString() + '</div></div><div class="stat-icon"><i class="fa-solid fa-circle-check"></i></div></div>' +
        '</div>' +
        '<div class="table-toolbar"><div class="toolbar-actions"><button class="btn btn-sm btn-outline" onclick="exportTable(\'copy\')">Copy</button><button class="btn btn-sm btn-outline" onclick="exportTable(\'excel\')">Excel</button><button class="btn btn-sm btn-outline" onclick="exportTable(\'pdf\')">PDF</button></div><div class="table-search" style="margin-left:auto"><label>Search:</label><input type="text" id="tableSearch"></div></div>' +
        '<div class="data-table-wrapper"><table class="data-table"><thead><tr>' + buildTableHeader(cols) + '</tr></thead><tbody>' + rows + '</tbody></table></div>' +
        renderPagination(pg);
}

// ==========================================
// EXPENSES PAGE
// ==========================================
function renderExpenses() {
    const cols = [
        { key: 'category', label: 'Category' }, { key: 'description', label: 'Description' }, { key: 'amount', label: 'Amount' },
        { key: 'date', label: 'Date' }, { key: 'status', label: 'Status' },
    ];
    const data = filterAndSort(AppData.expenses, cols);
    const pg = paginate(data);
    const totalExpenses = AppData.expenses.reduce((s, e) => s + (parseFloat(e.amount) || 0), 0);
    const approved = AppData.expenses.filter(e => e.status === 'Approved').reduce((s, e) => s + (parseFloat(e.amount) || 0), 0);
    const pending = AppData.expenses.filter(e => e.status === 'Pending').reduce((s, e) => s + (parseFloat(e.amount) || 0), 0);

    let rows = pg.items.map(e =>
        '<tr><td>' + e.category + '</td><td>' + e.description + '</td><td>AED ' + Number(e.amount).toLocaleString() + '</td><td>' + e.date + '</td><td><span class="status-badge ' + (e.status === 'Approved' ? 'completed' : e.status === 'Pending' ? 'pending' : 'lost') + '">' + e.status + '</span></td><td><div class="action-btns">' +
        '<button class="action-btn view" onclick="crudView(\'Expense\',FIELDS.expenses,AppData.expenses.find(x=>x.id===' + e.id + '))"><i class="fa-solid fa-eye"></i></button>' +
        '<button class="action-btn edit" onclick="crudEdit(\'expenses\',\'Expense\',FIELDS.expenses,' + e.id + ')"><i class="fa-solid fa-pen"></i></button>' +
        '<button class="action-btn delete" onclick="crudDelete(\'expenses\',\'Expense\',' + e.id + ')"><i class="fa-solid fa-trash"></i></button>' +
        '</div></td></tr>'
    ).join('');

    return '<div class="page-header"><h1 class="page-title">EXPENSES</h1><button class="btn btn-primary" onclick="crudCreate(\'expenses\',\'Expense\',FIELDS.expenses)">Add Expense</button></div>' +
        '<div class="stat-cards">' +
        '<div class="stat-card green"><div class="stat-info"><h4>Total Expenses</h4><div class="stat-number">AED ' + totalExpenses.toLocaleString() + '</div></div><div class="stat-icon"><i class="fa-solid fa-receipt"></i></div></div>' +
        '<div class="stat-card purple"><div class="stat-info"><h4>Approved</h4><div class="stat-number">AED ' + approved.toLocaleString() + '</div></div><div class="stat-icon"><i class="fa-solid fa-circle-check"></i></div></div>' +
        '<div class="stat-card orange"><div class="stat-info"><h4>Pending</h4><div class="stat-number">AED ' + pending.toLocaleString() + '</div></div><div class="stat-icon"><i class="fa-solid fa-clock"></i></div></div>' +
        '</div>' +
        '<div class="table-toolbar"><div class="toolbar-actions"><button class="btn btn-sm btn-outline" onclick="exportTable(\'copy\')">Copy</button><button class="btn btn-sm btn-outline" onclick="exportTable(\'excel\')">Excel</button><button class="btn btn-sm btn-outline" onclick="exportTable(\'pdf\')">PDF</button></div><div class="table-search" style="margin-left:auto"><label>Search:</label><input type="text" id="tableSearch"></div></div>' +
        '<div class="data-table-wrapper"><table class="data-table"><thead><tr>' + buildTableHeader(cols) + '</tr></thead><tbody>' + rows + '</tbody></table></div>' +
        renderPagination(pg);
}

// ==========================================
// PROFILE PAGE
// ==========================================
function renderProfile() {
    const p = AppData.profile;
    return '<div class="page-header"><h1 class="page-title">PROFILE</h1></div>' +
        '<div class="profile-card"><div class="profile-header"><div class="profile-img"><img src="https://ui-avatars.com/api/?name=' + encodeURIComponent(p.name) + '&background=e8d5d0&color=333&size=100" alt="' + p.name + '"></div><div class="profile-info"><h3>' + p.name + '</h3><p>' + p.role + ' - Green Growth</p></div></div>' +
        '<form id="profileForm">' +
        '<div class="form-group"><label>Full Name</label><input type="text" name="name" value="' + p.name + '"></div>' +
        '<div class="form-group"><label>Email</label><input type="email" name="email" value="' + p.email + '"></div>' +
        '<div class="form-group"><label>Phone</label><input type="tel" name="phone" value="' + p.phone + '"></div>' +
        '<div class="form-group"><label>Role</label><input type="text" name="role" value="' + p.role + '"></div>' +
        '<div class="form-group"><label>Department</label><select name="department"><option' + (p.department === 'Sales' ? ' selected' : '') + '>Sales</option><option' + (p.department === 'Marketing' ? ' selected' : '') + '>Marketing</option><option' + (p.department === 'Operations' ? ' selected' : '') + '>Operations</option><option' + (p.department === 'Finance' ? ' selected' : '') + '>Finance</option></select></div>' +
        '<button type="button" class="btn btn-primary" onclick="saveProfile()">Save Changes</button>' +
        '</form></div>';
}

function saveProfile() {
    const form = document.getElementById('profileForm');
    if (!form) return;
    const data = getFormData(form);
    Object.assign(AppData.profile, data);
    saveData();
    logActivity('Updated profile settings', 'update');
    showToast('Profile updated successfully!', 'success');
    // Update sidebar name and avatar
    const nameEl = document.querySelector('.profile-name');
    if (nameEl) nameEl.textContent = data.name;
    const avatarImgs = document.querySelectorAll('.profile-avatar img, .user-avatar img');
    avatarImgs.forEach(img => img.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(data.name) + '&background=e8d5d0&color=333&size=100');
}

// ==========================================
// COMPANY PAGE
// ==========================================
function renderCompany() {
    const c = AppData.company;
    return '<div class="page-header"><h1 class="page-title">COMPANY SETTINGS</h1></div>' +
        '<div class="profile-card"><form id="companyForm">' +
        '<div class="form-group"><label>Company Name</label><input type="text" name="name" value="' + c.name + '"></div>' +
        '<div class="form-group"><label>Industry</label><input type="text" name="industry" value="' + c.industry + '"></div>' +
        '<div class="form-group"><label>Address</label><textarea name="address" rows="3">' + c.address + '</textarea></div>' +
        '<div class="form-group"><label>Phone</label><input type="tel" name="phone" value="' + c.phone + '"></div>' +
        '<div class="form-group"><label>Website</label><input type="text" name="website" value="' + c.website + '"></div>' +
        '<button type="button" class="btn btn-primary" onclick="saveCompany()">Save Changes</button>' +
        '</form></div>';
}

function saveCompany() {
    const form = document.getElementById('companyForm');
    if (!form) return;
    const data = getFormData(form);
    Object.assign(AppData.company, data);
    saveData();
    logActivity('Updated company settings', 'update');
    showToast('Company settings updated!', 'success');
}

// ==========================================
// USERS PAGE
// ==========================================
function renderUsers() {
    const cols = [
        { key: 'name', label: 'Name' }, { key: 'email', label: 'Email' }, { key: 'role', label: 'Role' },
        { key: 'department', label: 'Department' }, { key: 'status', label: 'Status' },
    ];
    const data = filterAndSort(AppData.users, cols);
    const pg = paginate(data);
    let rows = pg.items.map(u =>
        '<tr><td>' + u.name + '</td><td>' + u.email + '</td><td>' + u.role + '</td><td>' + u.department + '</td><td><span class="status-badge ' + u.status.toLowerCase() + '">' + u.status + '</span></td><td><div class="action-btns">' +
        '<button class="action-btn view" onclick="crudView(\'User\',FIELDS.users,AppData.users.find(x=>x.id===' + u.id + '))"><i class="fa-solid fa-eye"></i></button>' +
        '<button class="action-btn edit" onclick="crudEdit(\'users\',\'User\',FIELDS.users,' + u.id + ')"><i class="fa-solid fa-pen"></i></button>' +
        (u.id !== 1 ? '<button class="action-btn delete" onclick="crudDelete(\'users\',\'User\',' + u.id + ')"><i class="fa-solid fa-trash"></i></button>' : '') +
        '</div></td></tr>'
    ).join('');

    return '<div class="page-header"><h1 class="page-title">USERS</h1><button class="btn btn-primary" onclick="crudCreate(\'users\',\'User\',FIELDS.users)">Add User</button></div>' +
        '<div class="table-toolbar"><div class="toolbar-actions"><button class="btn btn-sm btn-outline" onclick="exportTable(\'copy\')">Copy</button><button class="btn btn-sm btn-outline" onclick="exportTable(\'excel\')">Excel</button><button class="btn btn-sm btn-outline" onclick="exportTable(\'pdf\')">PDF</button></div><div class="table-search" style="margin-left:auto"><label>Search:</label><input type="text" id="tableSearch"></div></div>' +
        '<div class="data-table-wrapper"><table class="data-table"><thead><tr>' + buildTableHeader(cols) + '</tr></thead><tbody>' + rows + '</tbody></table></div>' +
        renderPagination(pg);
}

// ==========================================
// COMING SOON
// ==========================================
function renderComingSoon() {
    return '<div class="empty-state"><i class="fa-solid fa-hammer"></i><h3>Coming Soon</h3><p>This feature is under development.</p></div>';
}

// ==========================================
// Initialize App
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Logout button
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) logoutBtn.addEventListener('click', logout);

    // Check for existing session
    const savedUser = sessionStorage.getItem('loggedInUser');
    if (savedUser) {
        try {
            loggedInUser = JSON.parse(savedUser);
            enterApp();
        } catch (e) {
            renderLoginScreen();
        }
    } else {
        renderLoginScreen();
    }
});
