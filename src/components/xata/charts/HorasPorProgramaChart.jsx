import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts/core'
import { PieChart } from 'echarts/charts'
import {
   TitleComponent,
   TooltipComponent,
   LegendComponent,
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

// Registramos los componentes necesarios
echarts.use([
   TitleComponent,
   TooltipComponent,
   LegendComponent,
   PieChart,
   CanvasRenderer,
])

export const HorasPorProgramaChart = ({ intensidadesHorarias }) => {
   const chartRef = useRef(null)

   useEffect(() => {
      if (intensidadesHorarias) {
         console.log(Object.keys(intensidadesHorarias))
         const myChart = echarts.init(chartRef.current)

         const data = Object.keys(intensidadesHorarias).map(
            (programaNombre) => ({
               name: programaNombre,
               value: intensidadesHorarias[programaNombre],
            })
         )

         const option = {
            title: {
               text: 'Intensidad horaria por programa',
               left: 'center',
            },
            tooltip: {
               trigger: 'item',
               formatter: '{b}: {c} ({d}%)',
            },
            series: [
               {
                  name: 'Datos',
                  type: 'pie',
                  radius: '55%',
                  center: ['50%', '50%'],
                  data: data,
                  emphasis: {
                     itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                     },
                  },
               },
            ],
         }

         myChart.setOption(option)
      }
   }, [intensidadesHorarias])

   return <div ref={chartRef} style={{ width: '500px', height: '500px' }}></div>
}
