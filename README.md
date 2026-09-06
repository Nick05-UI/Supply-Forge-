# SupplyForge — Complete Inventory & Procurement Enterprise Application

A complete, responsive, multi-module Single Page Application (SPA) for **SupplyForge: Manage. Track. Supply.** designed with 1:1 pixel perfection, interactive state management, custom SVG illustrations, and comprehensive enterprise workflows.

---

## 🌟 Modules & Features

### 1. Home Dashboard (`#home`)
- **Key Performance Indicators (KPIs)**: Total Materials (152), Stock Value (₹ 2.45 Cr), Low Stock Items (8), Pending Orders (6), Incoming Shipments (3).
- **Inventory Snapshot**: Donut chart with smooth hover states, category tooltip inspection, and precise percentage breakdown (Raw Materials 67%, Consumables 18%, Packing Materials 10%, Others 5%).
- **Recent Purchase Orders**: Real-time PO tracking with supplier initial badges, status pills (Pending, Approved, Dispatched), and quick access to PO slips.
- **Low Stock Alerts**: Real-time stock vs. safe threshold display with 1-click reorder triggers.
- **Quick Actions Bar**: Circular one-touch shortcuts to create orders, requests, stock movements, and goods receipts.
- **Logistics Promo Banner**: Custom vector warehouse illustration with conveyor and storage racks.

### 2. Inventory Master Catalog (`#inventory`)
- **Category Filter Tabs**: All Items (12), Raw Materials (5), Consumables (3), Packing Materials (2), Others (1).
- **Search Toolbar**: Instant search across material name, SKU, and warehouse storage bay.
- **Inventory Table**:
  - Columns: Item Name & Thumbnail, SKU Code, Category, Storage Bay, Available Stock, Safety Min. Level, Unit Price, Status Badge, Reorder Action.
- **Direct Export**: One-click CSV export of the full inventory dataset.
- **Add New Material Modal**: Dynamically adds items into the catalog, updating the dashboard counters and category charts in real time.

### 3. Suppliers Directory (`#suppliers`)
- **Vendor Profiles**: ABC Metals, Shree Steel Corp., Global Alloys, Kaveri Enterprises, Mahalaxmi Metals, PacPrint Industries.
- **Metrics**: Star ratings, active contract count, total historical spend (₹ Lakhs), GSTIN, verified payment terms (Net 30/45 days), and contact info.
- **Add Supplier**: Register new approved vendors with categories and contact credentials.
- **Direct PO Integration**: "Create PO" button directly pre-populates vendor details in the purchase order wizard.

### 4. Purchase Orders Lifecycle (`#purchase-orders`)
- **Status Filtering**: Filter by All, Pending, Approved, Dispatched, or Delivered.
- **Interactive Approval**: Managers can approve pending orders directly in the table.
- **PO Slip & Invoice Preview**: Opens an itemized purchase order slip complete with quantity, unit rates, tax calculations, and authorized signatures.
- **Create PO Wizard**: Submit new orders with target delivery dates and line items.

### 5. Goods Receipt Notes (GRN) (`#goods-receipt`)
- **Consignment Tracking**: Log incoming vendor shipments against existing PO references.
- **Quality Control (QC)**: Track inspection statuses (*Passed 100%*, *Partial Reject*, *Pending QC Lab Clearance*).
- **Slip Generation**: Download official GRN slips for warehouse record-keeping.

### 6. Stock Movements (`#stock-movements`)
- **Internal Logistics**: Track material dispatches between central storage bays, shopfloor CNC lines, and packing stations.
- **Initiate Transfer**: Form with instant origin/destination selection and transfer reference generation.

### 7. Reports & Analytics (`#reports`)
- **Executive KPIs**: Monthly spend velocity, active certified vendors, shipments received, and 94.2% on-time delivery rate.
- **Monthly Spend Trend**: Interactive SVG bar graph tracking spending across Jan - Jun 2025.
- **Download Center**: One-click downloads for Monthly Stock Valuation CSV, Vendor Quality Scorecards, and GST ITC annexures.

### 8. Alerts & Thresholds (`#alerts`)
- **Critical Stockout Prevention**: Direct alerts for items that have dropped below safety thresholds (e.g. Zinc Coating, MS Steel Sheets, Aluminium Ingots, Copper Wire).
- **1-Click Reorder**: Instantly initiates a replenishment purchase order.

### 9. System Settings (`#settings`)
- **Facility Profile**: Operating name, GSTIN (27AAACF4412K1ZA), Chakan Pune plant address, default currency (₹ INR).
- **Warehouse Storage Bays**: Central Depot (Bay 1 & 2), East Storage Hub (Bay 4), Chemical Store (Bay 3), Packing Bay (Bay 6).

---

## 🚀 How to Run

The local development server is running at:
👉 **[http://localhost:8000/?v=4](http://localhost:8000/?v=4)**

To restart the server manually at any time, run:
```powershell
python -m http.server 8000
```
or open `index.html` directly in any web browser.

---

## 📁 File Structure

```
c:\Users\DELL\Desktop\Projects\
├── index.html                   # Core application markup with all 9 SPA views & modals
├── css/
│   └── styles.css               # Styling, Plus Jakarta Sans, view animations, badges, tables
├── js/
│   ├── app.js                   # SPA router, view renderers, table filters, search, modal logic
│   ├── data.js                  # Master data store (Inventory, Suppliers, POs, GRN, Movements)
│   └── chart.js                 # Exact mathematical SVG arc donut chart with hover tooltips
├── assets/
│   └── illustrations/
│       ├── logo.svg             # 3D faceted SupplyForge logo
│       ├── arjun-avatar.svg     # User profile avatar
│       ├── ms-steel-sheets.svg  # Isometric metal sheet thumbnail
│       ├── copper-wire.svg      # Isometric copper coil thumbnail
│       ├── aluminium-ingot.svg  # Isometric aluminium bars thumbnail
│       ├── zinc-coating.svg     # Paint tin thumbnail
│       ├── sidebar-callout.svg  # Clipboard & cartons graphic
│       └── warehouse-banner.svg # Worker & warehouse shelving scene
└── README.md                    # Complete project documentation
```
