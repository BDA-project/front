import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'

export const HistogramaCursosIntensidadHoraria = ({ data }) => {
   const chartRef = useRef(null)

   useEffect(() => {
      const getCourseCounts = () => {
         const counts = {
            32: 0,
            64: 0,
         }

         data.forEach((curso) => {
            if (curso.intensidadHoraria === 32) {
               counts[32]++
            } else if (curso.intensidadHoraria === 64) {
               counts[64]++
            }
         })

         return counts
      }

      const courseCounts = getCourseCounts()

      const myChart = echarts.init(chartRef.current)
      const option = {
         xAxis: {
            type: 'category',
            data: ['32', '64'],
         },
         yAxis: {
            type: 'value',
         },
         series: [
            {
               data: [courseCounts[32], courseCounts[64]],
               type: 'bar',
               itemStyle: {
                  color: function (params) {
                     // Asignar colores diferentes a cada barra
                     return params.dataIndex === 0 ? '#3366cc' : '#ff66cc'
                  },
               },
            },
         ],
      }

      option && myChart.setOption(option)
   }, [data])

   return <div ref={chartRef} style={{ width: '500px', height: '500px' }}></div>
}
