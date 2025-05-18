
        // People Counting Chart
        const peopleCountingCtx = document.getElementById('people-counting-chart').getContext('2d');
        const peopleCountingChart = new Chart(peopleCountingCtx, {
            type: 'line',
            data: {
                labels: ['ST. Bogor', 'ST. Tambun', 'ST. Bekasi', 'BLOK M', 'BSI Margonda', 'BSI Cilamaya'],
                datasets: [{
                    label: 'Total People',
                    toplocation: 'ATM Locations',
                    data: [1250, 1380, 1210, 1540, 1820, 2100],
                    borderColor: '#4361ee',
                    backgroundColor: 'rgba(67, 97, 238, 0.1)',
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: '#4361ee',
                    pointRadius: 4,
                    pointHoverRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            drawBorder: false,
                            color: 'rgba(0, 0, 0, 0.05)'
                        },
                        ticks: {
                            font: {
                                size: 12
                            }
                        }
                    },
                    x: {
                        grid: {
                            drawBorder: false,
                            display: false
                        },
                        ticks: {
                            font: {
                                size: 12
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: '#2b2d42',
                        titleFont: {
                            size: 14
                        },
                        bodyFont: {
                            size: 13
                        },
                        padding: 12,
                        displayColors: false,
                        callbacks: {
                            label: function(context) {
                                return `Total People: ${context.raw}`;
                            },

                        }
                    }
                }
            }
        });

        // Locations Distribution Chart
        const locationsCtx = document.getElementById('locations-chart').getContext('2d');
        const locationsChart = new Chart(locationsCtx, {
            type: 'doughnut',
            data: {
                labels: ['Helm Detection', 'People Counting', 'Dwell Time', 'Struk', 'Trashbin', '2 People', 'Fascia Detection' ],
                datasets: [{
                    data: [487, 450, 652 ,1250, 150, 120, 100],
                    backgroundColor: [
                        '#4361ee',
                        '#4cc9f0',
                        '#0bb534',
                        '#f9c74f'
                    ],
                    borderWidth: 0,
                    hoverOffset: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '65%',
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            font: {
                                size: 12
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: '#2b2d42',
                        titleFont: {
                            size: 14
                        },
                        bodyFont: {
                            size: 13
                        },
                        padding: 12,
                        callbacks: {
                            label: function(context) {
                                return `${context.label}: ${context.raw}`;
                            }
                        }
                    }
                }
            }
        });

        // Helm Detection Chart
        const helmCtx = document.getElementById('helm-chart').getContext('2d');
        const helmChart = new Chart(helmCtx, {
            type: 'pie',
            data: {
                labels: ['ST. Bogor', 'ST. Tambun', 'BSI Margonda', 'BSI Cibubur', 'BSI Indomaret Cikarang'],
                datasets: [{
                    data: [356, 87, 44, 23, 12],
                    backgroundColor: [
                        '#0bb534',
                        '#f9c74f',
                        '#ef233c',
                        '#4cc9f0',
                        '#4361ee'
                    ],
                    borderWidth: 0,
                    hoverOffset: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            font: {
                                size: 12
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: '#2b2d42',
                        titleFont: {
                            size: 14
                        },
                        bodyFont: {
                            size: 13
                        },
                        padding: 12
                    }
                }
            }
        });

        // Fascia Status Chart
        const fasciaCtx = document.getElementById('fascia-chart').getContext('2d');
        const fasciaChart = new Chart(fasciaCtx, {
            type: 'pie',
            data: {
                labels: ['Upper Fascia Open', 'Lower Fascia Open', 'Both Closed'],
                datasets: [{
                    data: [78, 47, 375],
                    backgroundColor: [
                        '#f9c74f',
                        '#ef233c',
                        '#0bb534'
                    ],
                    borderWidth: 0,
                    hoverOffset: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            font: {
                                size: 12
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: '#2b2d42',
                        titleFont: {
                            size: 14
                        },
                        bodyFont: {
                            size: 13
                        },
                        padding: 12
                    }
                }
            }
        });

        // Multiple Person Alerts Chart
        const alertsCtx = document.getElementById('alerts-chart').getContext('2d');
        const alertsChart = new Chart(alertsCtx, {
            type: 'pie',
            data: {
                labels: ['2 People', '3+ People'],
                datasets: [{
                    data: [38, 12],
                    backgroundColor: [
                        '#f9c74f',
                        '#ef233c',
                        '#4cc9f0'
                    ],
                    borderWidth: 0,
                    hoverOffset: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            font: {
                                size: 12
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: '#2b2d42',
                        titleFont: {
                            size: 14
                        },
                        bodyFont: {
                            size: 13
                        },
                        padding: 12
                    }
                }
            }
        });

        // Activity Trend Chart
        const activityCtx = document.getElementById('activity-trend-chart').getContext('2d');
        const activityChart = new Chart(activityCtx, {
            type: 'line',
            data: {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                datasets: [{
                    label: 'Helm Detections',
                    data: [42, 58, 65, 72, 80, 95, 75],
                    borderColor: '#4361ee',
                    backgroundColor: 'rgba(67, 97, 238, 0.1)',
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: '#4361ee',
                    pointRadius: 4,
                    pointHoverRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            drawBorder: false,
                            color: 'rgba(0, 0, 0, 0.05)'
                        },
                        ticks: {
                            font: {
                                size: 12
                            }
                        }
                    },
                    x: {
                        grid: {
                            drawBorder: false,
                            display: false
                        },
                        ticks: {
                            font: {
                                size: 12
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: '#2b2d42',
                        titleFont: {
                            size: 14
                        },
                        bodyFont: {
                            size: 13
                        },
                        padding: 12,
                        displayColors: false
                    }
                }
            }
        });

        // Tab functionality for activity trend chart
        document.querySelectorAll('.chart-tabs .chart-tab').forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs
                document.querySelectorAll('.chart-tabs .chart-tab').forEach(t => {
                    t.classList.remove('active');
                });
                
                // Add active class to clicked tab
                this.classList.add('active');
                
                // Update chart data based on selected tab
                const tabText = this.textContent.trim();
                
                if (tabText === 'Helm Detection') {
                    activityChart.data.datasets[0].label = 'Helm Detections';
                    activityChart.data.datasets[0].data = [42, 58, 65, 72, 80, 95, 75];
                    activityChart.data.datasets[0].borderColor = '#4361ee';
                    activityChart.data.datasets[0].backgroundColor = 'rgba(67, 97, 238, 0.1)';
                } else if (tabText === 'Receipts') {
                    activityChart.data.datasets[0].label = 'Receipt Detections';
                    activityChart.data.datasets[0].data = [132, 158, 175, 190, 210, 245, 150];
                    activityChart.data.datasets[0].borderColor = '#0bb534';
                    activityChart.data.datasets[0].backgroundColor = 'rgba(11, 181, 52, 0.1)';
                } else if (tabText === 'Dwell Time') {
                    activityChart.data.datasets[0].label = 'Avg Dwell Time (s)';
                    activityChart.data.datasets[0].data = [620, 645, 680, 635, 590, 710, 690];
                    activityChart.data.datasets[0].borderColor = '#f9c74f';
                    activityChart.data.datasets[0].backgroundColor = 'rgba(249, 199, 79, 0.1)';
                } else if (tabText === 'Multiple Person') {
                    activityChart.data.datasets[0].label = 'Multiple Person Alerts';
                    activityChart.data.datasets[0].data = [5, 8, 10, 12, 9, 7, 5];
                    activityChart.data.datasets[0].borderColor = '#ef233c';
                    activityChart.data.datasets[0].backgroundColor = 'rgba(239, 35, 60, 0.1)';
                }
                
                activityChart.update();
            });
        });

        // Toggle for People Counting Chart tabs
        document.querySelectorAll('.chart-tabs .chart-tab').forEach(tab => {
            if (tab.parentElement.previousElementSibling.textContent.includes('People Counting')) {
                tab.addEventListener('click', function() {
                    // Remove active class from all tabs
                    this.parentElement.querySelectorAll('.chart-tab').forEach(t => {
                        t.classList.remove('active');
                    });
                    
                    // Add active class to clicked tab
                    this.classList.add('active');
                    
                    // You would update the chart data here based on the selected tab
                    // For now, we'll just demonstrate the UI change
                });
            }
        });

        // Alert Filter functionality
        document.querySelectorAll('.alert-filter button').forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                document.querySelectorAll('.alert-filter button').forEach(b => {
                    b.classList.remove('active');
                });
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // You would filter the alerts here based on the selected filter
            });
        });

        // Add animation to alert count
        const alertCount = document.querySelector('.alert-count');
        setInterval(() => {
            alertCount.style.transform = 'scale(1.2)';
            setTimeout(() => {
                alertCount.style.transform = 'scale(1)';
            }, 300);
        }, 3000);

        // Add interactivity to the stat cards
        document.querySelectorAll('.stat-card').forEach(card => {
            card.addEventListener('click', function() {
                // You could show more detailed information when a card is clicked
                console.log('Card clicked:', this.querySelector('p').textContent);
            });
        });

        // Add interactivity to detection items
        document.querySelectorAll('.detection-item').forEach(item => {
            item.addEventListener('click', function() {
                // You could show more detailed information when an item is clicked
                console.log('Detection clicked:', this.querySelector('.detection-title').textContent);
            });
        });

        // Add download functionality
        document.getElementById('download-reports').addEventListener('click', function() {
            alert('Preparing download for current analytics reports...');
            // Implementation for actual download would go here
        });

        // Add filter change functionality
        document.getElementById('region-select').addEventListener('change', function() {
            updateDashboard();
        });
        
        document.getElementById('location-select').addEventListener('change', function() {
            updateDashboard();
        });
        
        document.getElementById('date-select').addEventListener('change', function() {
            updateDashboard();
        });
        
        function updateDashboard() {
            const region = document.getElementById('region-select').value;
            const location = document.getElementById('location-select').value;
            const date = document.getElementById('date-select').value;
            
            console.log(`Filters updated: ${region}, ${location}, ${date}`);
            // You would update all charts and data based on the new filters
            
            // For demonstration, let's simulate a loading state
            document.querySelectorAll('.chart-container').forEach(container => {
                container.style.opacity = '0.5';
            });
            
            setTimeout(() => {
                document.querySelectorAll('.chart-container').forEach(container => {
                    container.style.opacity = '1';
                });
                // Show a toast notification or some indication that data was refreshed
            }, 800);
        }
        document.addEventListener('DOMContentLoaded', function() {
    // Pagination functionality could be implemented here
    const paginationButtons = document.querySelectorAll('.pagination-btn');
    
    paginationButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            paginationButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // In a real implementation, this would trigger loading of different data
            // For this demo, we'll just update the info text
            const pageNumber = this.textContent;
            const startItem = (pageNumber - 1) * 10 + 1;
            const endItem = Math.min(pageNumber * 10, 500);
            
            document.querySelector('.pagination-info').textContent = 
                `Showing ${startItem}-${endItem} of 500 ATMs`;
        });
    });
});
  

 
    // Sample data (in a real application, this would come from a server)
    const atmData = [
      {
        atm: "ATM St. Bogor",
        helm: 12,
        struk: 34,
        trashbin: 4,
        dwellTime: "210s",
        peopleCounting: 10,
        multiplePerson: 2,
        fasciaAtas: 20,
        fasciaBawah: 20
      },
      {
        atm: "ATM BSI Margonda",
        helm: 6,
        struk: 15,
        trashbin: 2,
        dwellTime: "150s",
        peopleCounting: 30,
        multiplePerson: 2,
        fasciaAtas: 20,
        fasciaBawah: 15
      },
      {
        atm: "ATM BSI Sudirman",
        helm: 6,
        struk: 15,
        trashbin: 2,
        dwellTime: "150s",
        peopleCounting: 12,
        multiplePerson: 3,
        fasciaAtas: 20,
        fasciaBawah: 15
      },
      {
        atm: "ATM St. MRT",
        helm: 6,
        struk: 15,
        trashbin: 2,
        dwellTime: "150s",
        peopleCounting: 13,
        multiplePerson: 3,
        fasciaAtas: 20,
        fasciaBawah: 15
      },
      {
        atm: "ATM Mall Kartini",
        helm: 8,
        struk: 22,
        trashbin: 5,
        dwellTime: "180s",
        peopleCounting: 25,
        multiplePerson: 1,
        fasciaAtas: 18,
        fasciaBawah: 22
      },
      {
        atm: "ATM Wisma BNI",
        helm: 15,
        struk: 40,
        trashbin: 6,
        dwellTime: "120s",
        peopleCounting: 15,
        multiplePerson: 4,
        fasciaAtas: 25,
        fasciaBawah: 18
      },
      {
        atm: "ATM Plaza Senayan",
        helm: 9,
        struk: 28,
        trashbin: 3,
        dwellTime: "200s",
        peopleCounting: 18,
        multiplePerson: 2,
        fasciaAtas: 15,
        fasciaBawah: 12
      },
      {
        atm: "ATM Grand Indonesia",
        helm: 11,
        struk: 32,
        trashbin: 7,
        dwellTime: "160s",
        peopleCounting: 22,
        multiplePerson: 5,
        fasciaAtas: 16,
        fasciaBawah: 17
      },
      {
        atm: "ATM Central Park",
        helm: 10,
        struk: 25,
        trashbin: 4,
        dwellTime: "190s",
        peopleCounting: 20,
        multiplePerson: 2,
        fasciaAtas: 22,
        fasciaBawah: 19
      },
      {
        atm: "ATM Kota Kasablanka",
        helm: 7,
        struk: 18,
        trashbin: 3,
        dwellTime: "175s",
        peopleCounting: 16,
        multiplePerson: 1,
        fasciaAtas: 14,
        fasciaBawah: 13
      },
      {
        atm: "ATM Gandaria City",
        helm: 14,
        struk: 38,
        trashbin: 5,
        dwellTime: "140s",
        peopleCounting: 28,
        multiplePerson: 3,
        fasciaAtas: 19,
        fasciaBawah: 21
      },
      {
        atm: "ATM Pondok Indah Mall",
        helm: 13,
        struk: 30,
        trashbin: 6,
        dwellTime: "165s",
        peopleCounting: 24,
        multiplePerson: 2,
        fasciaAtas: 17,
        fasciaBawah: 16
      }
    ];

    // For demonstration, create more dummy data
    for (let i = 0; i < 38; i++) {
      const randomIndex = Math.floor(Math.random() * atmData.length);
      const baseName = atmData[randomIndex].atm;
      
      atmData.push({
        atm: `${baseName} ${i+1}`,
        helm: Math.floor(Math.random() * 20) + 1,
        struk: Math.floor(Math.random() * 45) + 5,
        trashbin: Math.floor(Math.random() * 10) + 1,
        dwellTime: `${Math.floor(Math.random() * 200) + 100}s`,
        peopleCounting: Math.floor(Math.random() * 35) + 5,
        multiplePerson: Math.floor(Math.random() * 6),
        fasciaAtas: Math.floor(Math.random() * 25) + 10,
        fasciaBawah: Math.floor(Math.random() * 22) + 10
      });
    }

    // Setup
    let currentPage = 1;
    const rowsPerPage = 10;
    let filteredData = [...atmData];
    let sortDirection = 1; // 1 for ascending, -1 for descending
    let sortColumn = 0; // Default sort column index

    // Initial render
    renderTable();
    renderPagination();

    // Function to render the table
    function renderTable() {
  const tableBody = document.getElementById('tableBody');
  tableBody.innerHTML = '';
  
  const start = (currentPage - 1) * rowsPerPage;
  const end = Math.min(start + rowsPerPage, filteredData.length);
  
  if (filteredData.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="9" class="no-results">No results found</td>
      </tr>
    `;
    return;
  }
  
  for (let i = start; i < end; i++) {
    const item = filteredData[i];
    const row = document.createElement('tr');
    
    row.innerHTML = `
      <td><input type="checkbox" class="row-checkbox" data-atm="${item.atm}"></td>
      <td>${item.atm}</td>
      <td>${item.helm}</td>
      <td>${item.struk}</td>
      <td>${item.trashbin}</td>
      <td>${item.dwellTime}</td>
      <td>${item.peopleCounting}</td>
      <td>${item.multiplePerson > 0 ? `<span class="alert">${item.multiplePerson}</span>` : '0'}</td>
      <td>Open: ${item.fasciaAtas}<br />Closed: ${item.fasciaBawah}</td>
    `;
    
    tableBody.appendChild(row);
  }
}

    // Function to render pagination
    function renderPagination() {
      const pagination = document.getElementById('pagination');
      pagination.innerHTML = '';
      
      const totalPages = Math.ceil(filteredData.length / rowsPerPage);
      
      // Create pagination buttons
      if (totalPages > 1) {
        // First page button
        const firstBtn = document.createElement('button');
        firstBtn.className = `pagination-btn${currentPage === 1 ? ' active' : ''}`;
        firstBtn.textContent = '1';
        firstBtn.onclick = () => goToPage(1);
        pagination.appendChild(firstBtn);
        
        // Show ellipsis for many pages
        if (currentPage > 3) {
          const ellipsis = document.createElement('span');
          ellipsis.className = 'pagination-ellipsis';
          ellipsis.textContent = '...';
          pagination.appendChild(ellipsis);
        }
        
        // Show surrounding pages
        for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
          if (i === 1 || i === totalPages) continue; // Skip first and last as they're added separately
          
          const btn = document.createElement('button');
          btn.className = `pagination-btn${currentPage === i ? ' active' : ''}`;
          btn.textContent = i;
          btn.onclick = () => goToPage(i);
          pagination.appendChild(btn);
        }
        
        // Show ellipsis for many pages
        if (currentPage < totalPages - 2) {
          const ellipsis = document.createElement('span');
          ellipsis.className = 'pagination-ellipsis';
          ellipsis.textContent = '...';
          pagination.appendChild(ellipsis);
        }
        
        // Last page button (if more than one page)
        if (totalPages > 1) {
          const lastBtn = document.createElement('button');
          lastBtn.className = `pagination-btn${currentPage === totalPages ? ' active' : ''}`;
          lastBtn.textContent = totalPages;
          lastBtn.onclick = () => goToPage(totalPages);
          pagination.appendChild(lastBtn);
        }
      }
      
      // Page info
      const pageInfo = document.createElement('div');
      pageInfo.className = 'pagination-info';
      const start = Math.min((currentPage - 1) * rowsPerPage + 1, filteredData.length);
      const end = Math.min(currentPage * rowsPerPage, filteredData.length);
      pageInfo.textContent = `Showing ${start}–${end} of 500 ATMs`;
      pagination.appendChild(pageInfo);
    }

    // Function to change page
    function goToPage(page) {
      currentPage = page;
      renderTable();
      renderPagination();
    }

    // Function to search the table
    function searchTable() {
      const searchTerm = document.getElementById('searchInput').value.toLowerCase();
      
      if (searchTerm === '') {
        filteredData = [...atmData];
      } else {
        filteredData = atmData.filter(item => {
          return (
            item.atm.toLowerCase().includes(searchTerm) ||
            item.helm.toString().includes(searchTerm) ||
            item.struk.toString().includes(searchTerm) ||
            item.trashbin.toString().includes(searchTerm) ||
            item.dwellTime.toLowerCase().includes(searchTerm) ||
            item.peopleCounting.toString().includes(searchTerm) ||
            item.multiplePerson.toString().includes(searchTerm) ||
            item.fasciaAtas.toString().includes(searchTerm) ||
            item.fasciaBawah.toString().includes(searchTerm)
          );
        });
      }
      
      // Reset to first page after search
      currentPage = 1;
      renderTable();
      renderPagination();
    }

    // Function to sort table
    function sortTable(columnIndex) {
      // If same column, toggle direction
      if (sortColumn === columnIndex) {
        sortDirection *= -1;
      } else {
        sortColumn = columnIndex;
        sortDirection = 1;
      }
      
      filteredData.sort((a, b) => {
        const keys = ['atm', 'helm', 'struk', 'trashbin', 'dwellTime', 'peopleCounting', 'multiplePerson', 'fasciaAtas'];
        const key = keys[columnIndex];
        
        // Special case for dwell time (remove 's' and compare as numbers)
        if (key === 'dwellTime') {
          const aValue = parseInt(a[key].replace('s', ''));
          const bValue = parseInt(b[key].replace('s', ''));
          return sortDirection * (aValue - bValue);
        }
        
        // Special case for fascia (using fasciaAtas for sorting)
        if (columnIndex === 7) {
          return sortDirection * (a.fasciaAtas - b.fasciaAtas);
        }
        
        // For string values
        if (typeof a[key] === 'string') {
          return sortDirection * a[key].localeCompare(b[key]);
        }
        
        // For numeric values
        return sortDirection * (a[key] - b[key]);
      });
      
      renderTable();
    }

    // Function to export to Excel
    function exportToExcel() {
      // Create a worksheet
      const ws = XLSX.utils.json_to_sheet(
        filteredData.map(item => ({
          'ATM': item.atm,
          'Helm': item.helm,
          'Struk': item.struk,
          'Trashbin': item.trashbin,
          'Dwell Time': item.dwellTime,
          'People Counting': item.peopleCounting,
          'Multiple Person': item.multiplePerson,
          'Fascia Atas': item.fasciaAtas,
          'Fascia Bawah': item.fasciaBawah
        }))
      );
      
      // Create a workbook
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'ATM Detection');
      
      // Generate Excel file
      const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
      
      // Save file
      const today = new Date();
      const dateStr = `${today.getFullYear()}-${(today.getMonth()+1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
      saveAsExcel(excelBuffer, `ATM_Detection_${dateStr}.xlsx`);
    }

    // Helper function to save as Excel
    function saveAsExcel(buffer, fileName) {
      const data = new Blob([buffer], { type: 'application/octet-stream' });
      saveAs(data, fileName);
    }

    function toggleDropdown() {
  const dropdown = document.getElementById("dropdownMenu");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdown-toggle')) {
    const dropdowns = document.getElementsByClassName("dropdown-menu");
    for (let i = 0; i < dropdowns.length; i++) {
      dropdowns[i].style.display = "none";
    }
  }
}

// Dummy export functions
function exportToExcel() {
  alert("Exporting to Excel...");
  // implement your Excel export logic here
}

function exportToPDF() {
  alert("Exporting to PDF...");
  // implement your PDF export logic here
}

function exportToCSV() {
  alert("Exporting to CSV...");
  // implement your CSV export logic here
}

function getSelectedATMs() {
  const selected = [];
  document.querySelectorAll('.row-checkbox:checked').forEach(cb => {
    selected.push(cb.getAttribute('data-atm'));
  });
  return selected;
}
   const dateSelect = document.getElementById("date-select");
    const customDateInputs = document.getElementById("custom-date-inputs");

    dateSelect.addEventListener("change", function () {
        if (this.value === "custom") {
            customDateInputs.style.display = "flex";
        } else {
            customDateInputs.style.display = "none";
        }
    });


  