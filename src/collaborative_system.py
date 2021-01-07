import pandas as pd
from scipy import sparse
from sklearn.metrics.pairwise import cosine_similarity


ratings = pd.read_csv('restaurants.csv', index_col = 0)
"""filling the values for items that weren't rated with 0's"""
ratings = ratings.fillna(0)
#item_similarity = None;
#user_similarity = None;
#item_similarity_df = None;

def standardize(row):
    """helps in correcting the ratings of users that were too harsh or lenient
    this helps in creating a mean of 0 and a range of 1"""
    new_row = (row - row.mean())/(row.max() - row.min())
    return new_row

ratings_std = ratings.apply(standardize)
#this panda function helps in applying the change to all the values

def similarity():
    """Finding the similarity betweent the different types of restaurants based on the cummulative user ratings"""
    #user_similarity = cosine_similarity(ratings_std)
    #Taking the transpose as to use the values of the items and not the user
    item_similarity = cosine_similarity(ratings_std.T)
    #print("User", user_similarity)
    print("Item", item_similarity)
    """Creating a dataframe"""
    item_similarity_df = pd.DataFrame(item_similarity, index = ratings.columns, columns = ratings.columns)
    #item_score = item_similarity_df
    print("Item_DataFrame", item_similarity_df)




#def recommend():
#was not able to use the value of item_similarity_df in this method for some reasons even though I created a global variable
def recommend(restaurant_name, user_rating):
    """Recommending restaurant to the user based on the previous restaurant experienced and the ratings of it. doing so by using the similarity scores"""
    item_similarity = cosine_similarity(ratings_std.T)
    item_similarity_df = pd.DataFrame(item_similarity, index = ratings.columns, columns = ratings.columns)
    """Subtracting the mean of the ratings from the calculation below as if don't do that then if we rate a restaurant bad, then as the other restaurants that are bad
    have a similar rating to that restaurant, all those restaurants will be recommended which isn't good. So, I'm subtracting the from the computed value the mean value
    of the ratings so that if the user has not postively rated the restaurant then the computed values will be in negative and won't be recommended unlike before"""
    similar_score = item_similarity_df[restaurant_name]*(user_rating - 2.5)
    similar_score = similar_score.sort_values(ascending = False)




    return similar_score

def test():
    veg_lover = [("Restaurant 1",5), ("Restaurant 2", 2), ("Restaurant 3", 1)]
    similar_restaurants = pd.DataFrame()

    for restaurant, rating in veg_lover:
        similar_restaurants = similar_restaurants.append(recommend(restaurant, rating))
                                                                                     #,, ignore_index = True

    #similar_restaurants.head()
    """Summing up the values for each column which had values based on the similarities and recommendations that depended on what restaurant the user liked"""
    values = similar_restaurants.sum().sort_values(ascending=False)
    print("restaurant", values)



def main():

    #print(ratings)
    #print(ratings_std)
    #print(similarity())
    print("And the Recommendation Begins")
    print(recommend("Restaurant 4", 5))
    #print(test())


if __name__ == '__main__':
    main()


"""
Next Challenges:
Now must try to look into having training and testing datsets and use meansquared error types of things to improve it over time
and must see how the backend and automatically collect the user data and recommend accordingly

"""
