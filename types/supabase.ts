export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      certificates: {
        Row: {
          created_at: string | null
          description: string
          from: string | null
          id: number
          link: string | null
          name: string
          tags: string[] | null
          when: string | null
        }
        Insert: {
          created_at?: string | null
          description: string
          from?: string | null
          id?: number
          link?: string | null
          name: string
          tags?: string[] | null
          when?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string
          from?: string | null
          id?: number
          link?: string | null
          name?: string
          tags?: string[] | null
          when?: string | null
        }
        Relationships: []
      }
      projects: {
        Row: {
          created_at: string | null
          description: string
          id: number
          link: string | null
          name: string
          related_links: Json[] | null
          tags: string[] | null
          thumbnail_path: string | null
        }
        Insert: {
          created_at?: string | null
          description: string
          id?: number
          link?: string | null
          name: string
          related_links?: Json[] | null
          tags?: string[] | null
          thumbnail_path?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string
          id?: number
          link?: string | null
          name?: string
          related_links?: Json[] | null
          tags?: string[] | null
          thumbnail_path?: string | null
        }
        Relationships: []
      }
      research: {
        Row: {
          created_at: string | null
          description: string
          id: number
          link: string
          name: string
          tags: string[] | null
          when: string | null
        }
        Insert: {
          created_at?: string | null
          description: string
          id?: number
          link: string
          name: string
          tags?: string[] | null
          when?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string
          id?: number
          link?: string
          name?: string
          tags?: string[] | null
          when?: string | null
        }
        Relationships: []
      }
      work: {
        Row: {
          created_at: string | null
          description: string | null
          employer: string
          id: number
          link: string | null
          related_links: string[] | null
          tags: string[]
          titles: string[]
          when: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          employer: string
          id?: number
          link?: string | null
          related_links?: string[] | null
          tags: string[]
          titles: string[]
          when?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          employer?: string
          id?: number
          link?: string | null
          related_links?: string[] | null
          tags?: string[]
          titles?: string[]
          when?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
