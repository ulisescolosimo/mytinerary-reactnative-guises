import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const activityAPI = createApi({

    reducerPath: "activityAPI",


    baseQuery: fetchBaseQuery({
        baseUrl: 'http://192.168.0.16:4000'
    }),


    endpoints: (builder) => ({
        getActivities: builder.query({
            query: (itineraryID) => `/activities/?itinerary=${itineraryID}`
        })
    })
})

export default activityAPI
export const { useGetActivitiesQuery} = activityAPI