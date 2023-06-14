import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'

export const HistogramaEstudianteGenero = ({ data }) => {
   const chartRef = useRef(null)
   useEffect(() => {
      const getGenderCounts = () => {
         const counts = {
            Masculino: 0,
            Femenino: 0,
         }

         data.forEach((estudiante) => {
            counts[estudiante.genero]++
         })

         return counts
      }

      const genderCounts = getGenderCounts()

      const myChart = echarts.init(chartRef.current)
      const option = {
         xAxis: {
            type: 'category',
            data: ['Masculino', 'Femenino'],
         },
         yAxis: {
            type: 'value',
         },
         series: [
            {
               data: [genderCounts.Masculino, genderCounts.Femenino],
               type: 'bar',
               itemStyle: {
                  color: function (params) {
                     // Cambiar color solo para la categoría 'Femenino'
                     return params.name === 'Femenino' ? '#FFC0CB' : '#3366cc'
                  },
               },
            },
         ],
      }

      option && myChart.setOption(option)
   }, [data])

   return <div ref={chartRef} style={{ width: '500px', height: '500px' }}></div>
}
