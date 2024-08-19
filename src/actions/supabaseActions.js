import { supabase } from '@/client';

export const fetchContentCreators = async () => {
  try {
    const { data, error } = await supabase.from('creators').select('*');
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching content creators:', error);
    return null;
  }
};

export const fetchCreator = async (id) => {
  try {
    const { data, error } = await supabase
      .from('creators')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching creator:', error);
    return null;
  }
};



export const addContentCreator = async (creator) => {
  try {
    const { data, error } = await supabase
      .from('creators')
      .insert([creator])
      .select();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error adding content creator:', error);
    return null;
  }
};

export const editContentCreator = async (id, updatedFields) => {
  try {
    console.log("Updating creator with ID:", id);
    console.log("Updated fields:", updatedFields);

    const { data, error } = await supabase
      .from('creators')
      .update(updatedFields)
      .eq('id', id)
      .select();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error editing content creator:', error);
    return null;
  }
};

export const deleteContentCreator = async (id) => {
  try {
    const { data, error } = await supabase
      .from('creators')
      .delete()
      .eq('id', id);
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error deleting content creator:', error);
    return null;
  }
};
