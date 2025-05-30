document.addEventListener("DOMContentLoaded", () => {

    function stripHtml(html) {
        let elt = document.createElement("DIV");
        elt.innerHTML = html;
        return elt.textContent || elt.innerText || "";
    }

    function updateChart(table) {

        const data = table.rows({ search: 'applied' }).data().toArray();
        
        const severityCount = {};
        const dateCount = {};

        data.forEach(row => {
            const severity = stripHtml(row[1]);
            const date = row[2];

            severityCount[severity] = (severityCount[severity] || 0) + 1;
            dateCount[date] = (dateCount[date] || 0) + 1;
        });

        const pieData = Object.entries(severityCount).map(([key, value]) => ({
            name: key || 'N/A',
            value: value,
            itemStyle: {
                color: severityColors[key.toLowerCase()] || '#5470c6'
            }
        }));
        
        severityChart.setOption({
            title: { text: 'Severity' },
            toolbox: {
                feature: {
                    restore: {},
                    saveAsImage: {}
                }
            },
            tooltip: { trigger: 'item' },
            series: [{
                type: 'pie',
                radius: '60%',
                data: pieData
            }]
        });

        const lineData = Object.entries(dateCount)
          .sort(([a], [b]) => new Date(a) - new Date(b))
          .map(([date, count]) => ({ name: date, value: [date, count] }));

        dateChart.setOption({
            title: { text: 'CPANSA Published' },
            toolbox: {
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    restore: {},
                    saveAsImage: {}
                }
            },
            tooltip: { trigger: 'axis' },
            xAxis: {
                type: 'time'
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                type: 'line',
                smooth: true,
                symbol: 'none',
                areaStyle: {},
                data: lineData
            }]
        });
    }

    const severityColors = {
        critical: '#343a40',
        high: '#dc3545',
        medium: '#fd7e14',
        moderate: '#fd7e14',
        low: '#ffc107',
        minor: '#ffc107',
    };

    let table = new DataTable('#cpansa-table');
    let dateChart = echarts.init(document.querySelector('#date-chart'));
    let severityChart = echarts.init(document.querySelector('#severity-chart'));

    window.addEventListener('resize', function () {
        dateChart.resize();
        severityChart.resize();
    });

    table.on('draw', function () {
        updateChart(table);
    });
    
    updateChart(table);

});