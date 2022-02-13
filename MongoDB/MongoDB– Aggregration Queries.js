MongoDB -Aggregation Exercises
GitHUB Link: https://github.com/51dddharth/fresher2022.git

Atlanta Population
1.use db.zipcodes.find() to filter results to only the results where city is ATLANTA and state is GA.
db.zipcodes.find({'city':'ATLANTA','state':'GA'}).pretty()

2.use db.zipcodes.aggregate with $match to do the same as above.
db.zipcodes.aggregate( [{ $match:{ city:"ATLANTA" }},{$match:{state:"GA"}}])

3.use $group to count the number of zip codes in Atlanta.
db.zipcodes.aggregate({$group:{_id: "$city"}},{$count: "ATLANTA"})

4.use $group to find the total population in Atlanta.
db.zipcodes.aggregate({$match:{city:"ATLANTA"}},{$group:{_id:"$pop", total:{$sum:"$pop"}}})

Populations By State
1.use aggregate to calculate the total population for each state
db.zipcodes.aggregate([{$group:{_id: {state:"$state", city:"$city"},population: {$sum:"$pop"},}}])

2.sort the results by population, highest first
db.zipcodes.aggregate({$sort:{pop:-1}})

3.limit the results to just the first 3 results. What are the top 3 states in population?
db.zipcodes.aggregate({$sort:{pop:-1}},{$limit:3})

Populations by City
1.use aggregate to calculate the total population for each city (you have to use city/state combination). You can use a combination for the _id of the $group: { city: '$city', state: '$state' }
db.zipcodes.aggregate( [{ $group: { _id: "$state", totalPop: { $sum: "$pop" }}}])

2.sort the results by population, highest first
db.zipcodes.aggregate([{ $sort : { population : -1, city: 1 }}])

3.limit the results to just the first 3 results. What are the top 3 cities in population?
db.zipcodes.aggregate({$sort:{pop:-1,city: 1}},{$limit:3})

4.What are the top 3 cities in population in Texas?
db.zipcodes.aggregate([{ $group:{_id: {state:"$state",city: "$city" }  ,count: {$sum:1},population:{$sum:"$pop"}}},{$sort:{population:-1}}])

Bonus
1.Write a query to get the average city population for each state.
db.zipcodes.aggregate( [{ $group: { _id: { state: "$state", city: "$city" }, pop: { $sum: "$pop" } } },{ $group: { _id: "$_id.state", avgCityPop: { $avg: "$pop" }}}])

2.What are the top 3 states in terms of average city population?
db.zipcodes.aggregate([{$group:{ _id: {state: "$state", city : "$city"}, pop: {$sum : "$pop"} }},{ $sort: { pop: 1 } },{ $group:{_id : "$_id.state",biggestPop:   { $last: "$pop" }}}])


