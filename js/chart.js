/**
 * Donut Chart Component for Inventory Snapshot
 * Uses exact SVG mathematical arc paths - 100% immune to CSS transform-origin bugs or browser drift.
 */

function renderInventoryChart(containerId, data) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const size = 120;
  const strokeWidth = 19;
  const cx = size / 2;
  const cy = size / 2;
  const radius = 44; // Outer diameter = 88 + 19 = 107px, inner hole = 88 - 19 = 69px (clean white center)

  const categories = data.categories;
  const total = categories.reduce((sum, item) => sum + item.percentage, 0);

  let currentAngle = 0; // Starts at 12 o'clock
  let pathsHtml = '';

  categories.forEach((cat) => {
    const sliceAngle = (cat.percentage / total) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + sliceAngle;

    // Convert angles to Cartesian coordinates (12 o'clock = -90 deg)
    const startRad = (startAngle - 90) * Math.PI / 180;
    const endRad = (endAngle - 90) * Math.PI / 180;

    const x1 = (cx + radius * Math.cos(startRad)).toFixed(2);
    const y1 = (cy + radius * Math.sin(startRad)).toFixed(2);
    const x2 = (cx + radius * Math.cos(endRad)).toFixed(2);
    const y2 = (cy + radius * Math.sin(endRad)).toFixed(2);

    const largeArcFlag = sliceAngle > 180 ? 1 : 0;
    const pathData = `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`;

    pathsHtml += `
      <path
        d="${pathData}"
        stroke="${cat.color}"
        stroke-width="${strokeWidth}"
        fill="none"
        stroke-linecap="butt"
        class="donut-segment transition-opacity duration-150 cursor-pointer hover:opacity-80"
        data-name="${cat.name}"
        data-count="${cat.count}"
        data-percentage="${cat.percentage}%"
      />
    `;

    currentAngle = endAngle;
  });

  container.innerHTML = `
    <div class="relative flex items-center justify-center">
      <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" class="overflow-visible block">
        ${pathsHtml}
      </svg>
      <!-- Tooltip Box -->
      <div id="chart-tooltip" class="absolute pointer-events-none bg-slate-900 text-white text-[11px] py-1 px-2.5 rounded-lg shadow-lg opacity-0 transition-opacity duration-150 z-30 whitespace-nowrap">
      </div>
    </div>
  `;

  // Attach tooltips
  const segments = container.querySelectorAll('.donut-segment');
  const tooltip = container.querySelector('#chart-tooltip');

  segments.forEach(segment => {
    segment.addEventListener('mouseenter', () => {
      const name = segment.getAttribute('data-name');
      const count = segment.getAttribute('data-count');
      const pct = segment.getAttribute('data-percentage');

      tooltip.innerHTML = `<strong>${name}</strong>: ${count} (${pct})`;
      tooltip.style.opacity = '1';
    });

    segment.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      tooltip.style.left = `${e.clientX - rect.left + 8}px`;
      tooltip.style.top = `${e.clientY - rect.top - 28}px`;
    });

    segment.addEventListener('mouseleave', () => {
      tooltip.style.opacity = '0';
    });
  });
}

window.renderInventoryChart = renderInventoryChart;
