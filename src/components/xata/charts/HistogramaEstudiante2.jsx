import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'

export const HistogramaEstudianteEdad = ({ data }) => {
   const chartRef = useRef(null)
   useEffect(() => {
      const getAgeCounts = () => {
         const counts = {}

         data.forEach((estudiante) => {
            const edad = estudiante.edad
            if (counts[edad]) {
               counts[edad]++
            } else {
               counts[edad] = 1
            }
         })

         return counts
      }

      const ageCounts = getAgeCounts()

      const ages = Object.keys(ageCounts)
      const colors = [
         '#3366cc',
         '#ff66cc',
         '#66cc66',
         '#cc66cc',
         '#cccc66',
         '#ff9933',
         '#99ccff',
         '#ff3366',
      ] // Paleta de colores personalizada con 8 colores diferentes

      const myChart = echarts.init(chartRef.current)
      const option = {
         xAxis: {
            type: 'category',
            data: ages,
         },
         yAxis: {
            type: 'value',
         },
         series: [
            {
               data: Object.values(ageCounts),
               type: 'bar',
               itemStyle: {
                  color: (params) => colors[params.dataIndex % colors.length], // Asignar colores diferentes a cada barra
               },
            },
         ],
      }

      option && myChart.setOption(option)
   }, [data])

   return <div ref={chartRef} style={{ width: '500px', height: '500px' }}></div>
}
