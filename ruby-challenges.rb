# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN



# 1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

#beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

#letter_o = 'o'
# Expected output: ['coffee', 'soda water']
#letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']
#beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
#Pseudo Code
# Use select method on beverages_array so I can filter the elements in the array based on the conditions I want.
# Save the results of the filtered out elements into a new array called results that'll print out the well results.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
# result = beverages_array.select{ |beverage| beverage.include?('t')}
# print result
    
#This code works!. Just change the letter that will be used to filter out the words that don't have it
beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']


#Psuedo code
#This is first attempt at making it into a def method
# def  print_o(beverages_array)
#    print_o.include?"o"
# end
# def print_t(beverages_array)
#     print_t.include?"t"
# end


#Psuedo code
#This is second attempt at making it into a def method. This one works.
def print_o(beverages_array)
    result = beverages_array.select{ |beverage| beverage.include?('o')}
    print result
end
print_o(beverages_array)













#2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 
#Psuedo Code use flatten & sort method on the values in us_state, this will make the hash values into an array and then sort them alphabetically.
# Print out the new array with the sorted values.

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
def states(alphabatized_states)
    alphabatized_states = us_states.values.flatten.sort
    puts alphabatized_states
end





# 3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'


class Bike
    attr_accessor :model, :wheels , :current_speed
    def Initialized(model , wheels = 2 ,current_speed =0)
        @model=model
        @wheels=wheels
        @current_speed=current_speed
    end
    def bike_info 
    "The #{@Model}bike has #{@wheels} wheels  and is going #{@current_speed} mph."
    end
end
my_bike = Bike.new
Bike.Initialized = "Trek"


# 3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

