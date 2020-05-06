import React from "react";
import styled from "styled-components";
import {LastCourseWrapper} from "../Course/LastCourseContainer";
import {Line, Polar} from "react-chartjs-2";

const StatsTitle = styled.div`
      display: flex;
      width: 100%;
      height: 3rem;
`;

const StatsContent = styled.div`
      display: flex;
      width: 100%;
      height: 100%;
      border-radius: 10px;
      background-color: ${({theme}) => theme.app_background};
      box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.04), 0 10px 20px 0 rgba(0, 0, 0, 0.09);
      align-items: center;
      justify-content: center;
      padding: 2rem;
`;

export const StatsWrapper = styled.div`
      display: flex;
      margin-right: 2rem;
      width: 50%;
      height: 100%;
      ${LastCourseWrapper}:last-child{
           margin-right: 0;
      }
      flex-direction: column;
`;

const CourseStats = ({type}) => {

    const data = {
        labels: [
            '2.0',
            '3.0',
            '3.5',
            '4.0',
            '4.5',
            '5.0',
        ],
        datasets: [{
            data: [10, 8, 14, 20, 22, 10],
            backgroundColor: [
                '#B2B2B2',
                'rgba(127,132,241,0.68)',
                '#5163c2',
                '#3C4BAD',
                '#252B69',
                '#FFCC00',
            ],
        }]
    };

    const dataStudents = {
        labels: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
        datasets: [
            {
                label: 'Ilośc grup studenckich',
                fill: false,
                lineTension: 0.1,
                backgroundColor: '#252B69',
                borderColor: '#3C4BAD',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#3C4BAD',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#3C4BAD',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [5, 25, 16, 10, 14, 8, 7, 19, 17, 14, 16, 4]
            }
        ]
    };

    return (
        <StatsWrapper>
            {type === 'grades' ?
                <>

                    <StatsTitle>Statystyki ocen</StatsTitle>
                    <StatsContent>
                        <Polar data={data}/>
                    </StatsContent>
                </>
                :
                <>
                    <StatsTitle>Statystyki kursów</StatsTitle>
                    <StatsContent>
                        <Line data={dataStudents}/>
                    </StatsContent>
                </>
            }
        </StatsWrapper>
    )
};

export default CourseStats;
