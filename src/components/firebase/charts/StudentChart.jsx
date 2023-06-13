import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'

export const StudentChart = () => {
   const [chartData, setChartData] = useState({})

   useEffect(() => {
      const studentData = {
         labels: ['Juan', 'María', 'Pedro', 'Ana', 'Luis'],
         scores: [90, 85, 95, 80, 92],
      }

      if (
         Array.isArray(studentData.labels) &&
         Array.isArray(studentData.scores)
      ) {
         const data = {
            labels: studentData.labels,
            datasets: [
               {
                  label: 'Notas de los estudiantes',
                  data: studentData.scores,
                  backgroundColor: 'rgba(75, 192, 192, 0.6)',
               },
            ],
         }

         setChartData(data)
      }
   }, [])

   return (
      <div>
         <h2>Gráfico de Notas de los Estudiantes</h2>
         <Bar
            data={chartData}
            options={{
               responsive: true,
               scales: {
                  y: {
                     beginAtZero: true,
                     max: 100, // Rango máximo para el eje Y
                     title: {
                        display: true,
                        text: 'Notas',
                        font: {
                           size: 16,
                        },
                     },
                  },
                  x: {
                     title: {
                        display: true,
                        text: 'Estudiantes',
                        font: {
                           size: 16,
                        },
                     },
                  },
               },
            }}
         />
      </div>
   )
}
