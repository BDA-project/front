import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'

export const HistogramaCursosCantidadEstudiantes = ({ data }) => {
   const chartRef = useRef(null)

   useEffect(() => {
      const getCourseFrequencies = () => {
         const frequencies = {}

         data.forEach((curso, index) => {
            const { nombreCurso, cantidadEstudiantes } = curso
            if (!frequencies[nombreCurso]) {
               frequencies[nombreCurso] = {
                  value: cantidadEstudiantes,
                  itemStyle: {
                     color: getBarColor(index),
                  },
               }
            } else {
               frequencies[nombreCurso].value += cantidadEstudiantes
            }
         })

         return frequencies
      }

      const getBarColor = (index) => {
         const colors = [
            '#3366cc',
            '#dc3912',
            '#ff9900',
            '#109618',
            '#990099',
            '#0099c6',
            '#dd4477',
            '#66aa00',
            '#b82e2e',
            '#316395',
         ]

         return colors[index % colors.length]
      }

      const courseFrequencies = getCourseFrequencies()
      const courseNames = Object.keys(courseFrequencies)
      const courseData = Object.values(courseFrequencies)

      const myChart = echarts.init(chartRef.current)
      const option = {
         grid: {
            left: '30%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
         },
         xAxis: {
            type: 'value',
         },
         yAxis: {
            type: 'category',
            data: courseNames,
         },
         series: [
            {
               type: 'bar',
               data: courseData,
               itemStyle: {
                  color: (params) => params.data.itemStyle.color,
               },
            },
         ],
      }

      option && myChart.setOption(option)
   }, [data])

   return <div ref={chartRef} style={{ width: '900px', height: '500px' }}></div>
}
