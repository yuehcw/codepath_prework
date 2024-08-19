import { createClient } from '@supabase/supabase-js';

const URL = 'https://sxsgbhbgftmpogaggqwe.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4c2diaGJnZnRtcG9nYWdncXdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM5MzI2MjcsImV4cCI6MjAzOTUwODYyN30.OhNazZxpEQgSjZqiJXVQa4g5eWh3WmC-KUVMI6eFQXo';


export const supabase = createClient(URL, API_KEY);