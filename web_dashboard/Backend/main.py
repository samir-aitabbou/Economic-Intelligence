#from pymongo import MongoClient
import pandas as pd
from fastapi import FastAPI
from typing import Union
import json

# client = MongoClient('localhost',27017)  # 27017 is the default port number for mongodb
# db=client["myData"]
# scFinal=db["dataFinal"]
# df = pd.DataFrame(list(scFinal.find()))
# del df['_id']

df = pd.read_csv("ACM_IEEE_ScDir_Finale_Data.csv")

app = FastAPI()

@app.get("/nb_article")
def getNbArticles():
    return {"nb_articles": df.shape[0],
        "nb_articles_acm": df[df.Publisher=="Science direct"].shape[0],
        "nb_articles_science": df[df.Publisher=="ACM"].shape[0],
        "nb_articles_ieee": df[df.Publisher=="IEEE"].shape[0]}

@app.get("/all_articles")
def getArticles():
    data=[]
    result=scFinal.find({})
    for i in result:
        data.append({
            "Titre":i['Document Title'],
            "year":i['Publication Year'],
            #"Authors":i['Authors'],
            "Citations":i['Citations'],
            "Afficliation":i['Affiliations'],
            "Publisher":i['Publisher'],
            "doi":i['DOI']
        })
    return data

@app.get("/countries")
def getCountCountries():
    data=[]
    grouped = df.groupby("Affiliations").count()
    # Iterate through the groups and counts
    for group, count in grouped["Citations"].items():
        data.append({
            'country':group,
            'count': count
        })
    return data
    
@app.get("/years")
def getCountYears():
    data=[]
    grouped = df.groupby("Publication Year").count()
    # Iterate through the groups and counts
    for group, count in grouped["Citations"].items():
        data.append({
            'Year':group,
            'count': count
        })
    return data
    
@app.get("/citations")
def getCountCitations():
    data=[]
    grouped = df.groupby("Affiliations")["Citations"].sum()
    # Iterate through the groups and counts
    for group, count in grouped.items():
        data.append({
            'Country':group,
            'Citations': count
        })
    return data


    
@app.get("/citationsCountries")
def getCountCitationsAndCountries():
    data=[]
    grouped1 = df.groupby("Affiliations").count()
    grouped = df.groupby("Affiliations")["Citations"].sum()
    # Iterate through the groups and counts
    for group1, group2 in zip(grouped.items(), grouped1["Publication Year"].items()):
        data.append({
            'Country':group1[0],
            'Citations': group1[1],
            'count':group2[1]
        })
    return data

@app.get("/citationsByPublisher")
def getCountCitationsByPublisherr():
    data=[]
    grouped = df.groupby("Publisher")["Citations"].sum()
    # Iterate through the groups and counts
    for group, count in grouped.items():
        data.append({
            'Publisher':group,
            'Citations': count
        })
    return data